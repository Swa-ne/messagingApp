import express, { Express, Request, Response } from 'express';
import { checkEmailAvailability, checkUsernameAvailability, getUserIDByEmailAddress, getUserIDByUsername, loginUsertoDatabase, registerUsertoDatabase } from '../models/entry';

import jwt from 'jsonwebtoken';

export interface CustomResponse {
    message: string,
    httpCode: number
}

// Check Current User
export const checkCurrentUser = async (req: Request, res: Response) => {
    try {
        res.status(200).json({ 'message': 'valid' });
    } catch {
        res.status(500).json({ 'message': 'Internal Server Error' });
        return;
    }
};

// Logins
export const loginUserController = async (req: Request, res: Response) => {
    try {
        const userIdentifier: string = req.body.userIdentifier;
        const password: string = req.body.password;
        const userIdentifierType = await checkInputType(userIdentifier);
        const checkerForInput = await checkEveryInputForLogin(userIdentifier, password, userIdentifierType);
        let userID;
        if (checkerForInput.message === 'success') {
            const data = await loginUsertoDatabase(userIdentifier, password, userIdentifierType);
            let loginUpdate: any = data.message;
            if (data.message === 'success') {
                const user = { name: userIdentifier };
                const accessTokenSecret: any = process.env.ACCESS_TOKEN_SECRET;
                const accessToken = jwt.sign(user, accessTokenSecret);
                if (userIdentifierType === 'Username') {
                    userID = await getUserIDByUsername(userIdentifier);
                } else {
                    userID = await getUserIDByEmailAddress(userIdentifier);
                }
                loginUpdate = { loginUpdate, accessToken: accessToken, userID: userID };
            }

            res.status(data.httpCode).json(loginUpdate);
            return;
        }
        res.status(checkerForInput.httpCode).json(checkerForInput.message);
        return;
    } catch {
        res.status(500).json({ 'message': 'Internal Server Error' });
        return;
    }
};

const checkInputType = async (userIdentifier: string) => {
    return userIdentifier.includes('@') ? 'EmailAddress' : 'Username';
};

const checkEveryInputForLogin = async (userIdentifier: string, password: string, userIdentifierType: string) => {
    if (userIdentifierType === 'Username') {
        if (!checkUsernameValidity(userIdentifier)) {
            return { 'message': 'Invalid Username', "httpCode": 200 };
        }
    } else {
        if (!checkEmailValidity(userIdentifier)) {
            return { 'message': 'Invalid Email.', "httpCode": 200 };
        }
    }
    if (!checkPasswordValidity(password)) {
        return { 'message': 'Invalid Password.', "httpCode": 200 };
    }
    return { 'message': 'success', "httpCode": 200 };
};

// Registrations
export const registerUserController = async (req: Request, res: Response) => {
    const username: string = req.body.username;
    const emailAddress: string = req.body.emailAddress.toLowerCase();
    const confirmationEmailAddress: string = req.body.confirmationEmailAddress.toLowerCase();
    const password: string = req.body.password;
    const confirmationPassword: string = req.body.confirmationPassword;

    const checkerForInput = await checkEveryInputForSignup(username, emailAddress, confirmationEmailAddress, password, confirmationPassword);
    if (checkerForInput.message === 'success') {
        const data = registerUsertoDatabase(username, emailAddress, password);
        if (!data) {
            res.status(500).json({ 'message': 'Internal Server Error' });
            return;
        }
    }

    res.status(checkerForInput.httpCode).json(checkerForInput.message);
    return;
};

const checkEveryInputForSignup = async (username: string, emailAddress: string, confirmationEmailAddress: string, password: string, confirmationPassword: string): Promise<CustomResponse> => {
    if (!checkUsernameValidity(username)) {
        return { 'message': 'Username must only contains letters and numbers.', "httpCode": 200 };
    }
    if (!checkEmailValidity(emailAddress)) {
        return { 'message': 'Invalid Email.', "httpCode": 200 };
    }
    if (!checkPasswordValidity(password)) {
        return { 'message': 'Password must have at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.', "httpCode": 200 };
    }
    if (!(await checkUsernameAvailability(username))) {
        return { 'message': 'This username is being used.', "httpCode": 200 };
    }
    if (!(await checkEmailAvailability(emailAddress))) {
        return { 'message': 'This email address is being used.', "httpCode": 200 };
    }
    if (emailAddress !== confirmationEmailAddress) {
        return { 'message': "Those email address didn't match. Try again.", "httpCode": 200 };
    }
    if (password !== confirmationPassword) {
        return { 'message': "Those password didn't match. Try again.", "httpCode": 200 };
    }
    return { 'message': 'success', "httpCode": 200 };
};

const checkUsernameValidity = (username: string) => {
    const regex = /^[a-zA-Z0-9]{1,25}$/;

    return username.match(regex);
};

const checkEmailValidity = (emailAddress: string) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    return emailAddress.match(regex);
};

const checkPasswordValidity = (password: string) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s)./;
    // least one lowercase letter, one uppercase letter, one numeric digit, and one special character
    return password.match(regex);
};
