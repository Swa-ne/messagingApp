import * as bcrypt from "bcrypt";
import { ActiveUsers, User, UserSchemaInterface } from "../models/user";
export const loginUsertoDatabase = async (userIdentifier: string, password: string) => {
    try {
        let result = await User.findOne({ personalEmail: { $regex: new RegExp(`^${userIdentifier}$`, 'i') } });
        if (result) {
            if (await bcrypt.compare(password, result.passwordHash)) {
                return { 'message': 'success', "httpCode": 200 };
            }
            return { 'message': 'Sorry, looks like that\'s the wrong email or password.', "httpCode": 200 };
        }
        return { 'message': 'User not Found.', "httpCode": 200 };
    } catch {
        return { 'message': 'Internal Server Error.', "httpCode": 500 };
    }
};
export const registerUsertoDatabase = async (
    firstName: string,
    middleName: string,
    lastName: string,
    personalEmail: string,
    personalNumber: string,
    birthday: string,
    password: string
) => {
    let userCredentialResult, activeUser;

    try {
        const saltRounds = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, saltRounds);
        userCredentialResult = await new User({
            firstName,
            middleName,
            lastName,
            personalEmail,
            personalNumber,
            birthday,
            passwordHash
        }).save();
        activeUser = await new ActiveUsers({
            userId: userCredentialResult._id,
            active: "0",
            fullName: `${firstName} ${middleName && `${middleName} `}${lastName}`
        }).save();

    } catch (error) {
        console.log(error);
        if (userCredentialResult) {
            await userCredentialResult.deleteOne();
        }
        return { message: error, httpCode: 500 };
    }
};

export const checkEmailAvailability = async (emailAddress: string): Promise<boolean> => {
    try {
        const result: boolean = (await User.findOne({ personalEmail: { $regex: new RegExp(`^${emailAddress}$`, 'i') } })) === null;
        return result;
    } catch (error) {
        return false;
    }
};

export const getDataByEmailAddress = async (emailAddress: string): Promise<UserSchemaInterface | null> => {
    try {
        const result: UserSchemaInterface | null = await User.findOne({ personalEmail: { $regex: new RegExp(`^${emailAddress}$`, 'i') } });
        return result;
    } catch (error) {
        return null;
    }
};

// export const addRefreshToken = async (refreshToken : string) => {
//     try{
//         const [result] : Array<any> = await pool.query(`INSERT INTO refresh_token (token) VALUES (?)`, refreshToken)
//         return true
//     } catch {
//         return false
//     }

// }
// export const checkRefreshToken = async (refreshToken : string) => {
//     const [result] : Array<any> = await pool.query(`SELECT * FROM refresh_token WHERE token = ?;`, refreshToken)

//     return result.length == 0
// }
// export const deleteRefreshToken = async (refreshToken : string) => {
//     // TODO: Delete token from db
//     try{
//         const [result] : Array<any> = await pool.query(`INSERT INTO refresh_token (token) VALUES (?)`, refreshToken)
//         return true
//     } catch {
//         return false
//     }
// }
