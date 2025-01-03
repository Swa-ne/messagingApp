import express, { Express, Request, Response } from 'express';
import { checkEmailAvailability, getDataByEmailAddress, loginUsertoDatabase, registerUsertoDatabase } from '../services/entry';

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
        const { emailAddress, password } = req.body;
        const checkerForInput = await checkEveryInputForLogin(emailAddress, password);
        if (checkerForInput.message === 'success') {
            const data = await loginUsertoDatabase(emailAddress, password);
            let loginUpdate: any = data.message;
            if (data.message === 'success') {
                const userData = await getDataByEmailAddress(emailAddress);
                const user = { email: emailAddress, userId: userData?._id, userFullName: `${userData?.firstName} ${userData?.middleName && `${userData?.middleName} `}${userData?.lastName}` };
                const accessTokenSecret: any = process.env.ACCESS_TOKEN_SECRET;
                const accessToken = jwt.sign(user, accessTokenSecret);
                loginUpdate = { loginUpdate, accessToken: accessToken, ...user };
            }

            res.status(data.httpCode).json(loginUpdate);
            return;
        }
        res.status(checkerForInput.httpCode).json(checkerForInput.message);
        return;
    } catch (e) {
        res.status(500).json({ 'message': 'Internal Server Error' });
        return;
    }
};


const checkEveryInputForLogin = async (userIdentifier: string, password: string) => {
    if (!checkEmailValidity(userIdentifier)) {
        return { 'message': 'Please enter a valid email address', "httpCode": 200 };
    }
    if (!checkPasswordValidity(password)) {
        return { 'message': 'Sorry, looks like that\'s the wrong email or password.', "httpCode": 200 };
    }
    return { 'message': 'success', "httpCode": 200 };
};

// Registrations
export const registerUserController = async (req: Request, res: Response) => {
    const { firstName, lastName, middleName, password, confirmationPassword, personalNumber, birthday } = req.body;
    const emailAddress: string = req.body.emailAddress.toLowerCase();

    const checkerForInput = await checkEveryInputForSignup(emailAddress, password, confirmationPassword);
    if (checkerForInput.message === 'success') {
        const data = registerUsertoDatabase(firstName, middleName, lastName, emailAddress, personalNumber, birthday, password);
        if (!data) {
            res.status(500).json({ 'message': 'Internal Server Error' });
            return;
        }
    }

    res.status(checkerForInput.httpCode).json(checkerForInput.message);
    return;
};

const checkEveryInputForSignup = async (emailAddress: string, password: string, confirmationPassword: string): Promise<CustomResponse> => {
    if (!checkEmailValidity(emailAddress)) {
        return { 'message': 'Please enter a valid email address', "httpCode": 200 };
    }
    if (!checkPasswordValidity(password)) {
        return { 'message': 'Password must have at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.', "httpCode": 200 };
    }
    if (!(await checkEmailAvailability(emailAddress))) {
        return { 'message': 'This email address is being used.', "httpCode": 200 };
    }
    if (password !== confirmationPassword) {
        return { 'message': "Those password didn't match. Try again.", "httpCode": 200 };
    }
    return { 'message': 'success', "httpCode": 200 };
};

const checkEmailValidity = (emailAddress: string) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    return regex.test(emailAddress);
};

const checkPasswordValidity = (password: string) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s)./;
    // least one lowercase letter, one uppercase letter, one numeric digit, and one special character
    return regex.test(password);
};
