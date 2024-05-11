import * as bcrypt from "bcrypt";
import { User, UserSchemaInterface } from "../models/user";
export const loginUsertoDatabase = async (userIdentifier: String, password: String) => {
    // try {
    //     let [result] : any = await pool.query(`SELECT PasswordHash FROM user_login_data WHERE ${userIdentifierType} = ?;`, [userIdentifier])
    //     if(result.length > 0){
    //         result = result[0]["PasswordHash"]
    //         if(await bcrypt.compare(password, result)){
    //             return new HttpResponse({"message" : "success"}, 200);
    //         }
    //         return new HttpResponse({"message" : "Wrong Password."}, 200);
    //     }
    //     return new HttpResponse({"message" : "User not Found."}, 200);
    // } catch {
    return { 'message': 'Internal Server Error.', "httpCode": 500 };
    // }
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
    let userCredentialResult;

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

    } catch (error) {
        console.log(error);
        if (userCredentialResult) {
            await userCredentialResult.deleteOne();
        }
        return { message: error, httpCode: 500 };
    }
};

export const checkEmailAvailability = async (emailAddress: String): Promise<boolean> => {
    try {
        const result: boolean = (await User.findOne({ personalEmail: { $regex: new RegExp(`^${emailAddress}$`, 'i') } })) === null;
        return result;
    } catch (error) {
        return false;
    }
};

export const getUserIDByEmailAddress = async (emailAddress: String): Promise<UserSchemaInterface | null> => {
    try {
        const result: UserSchemaInterface | null = await User.findOne({ personalEmail: { $regex: new RegExp(`^${emailAddress}$`, 'i') } });
        return result;
    } catch (error) {
        return null;
    }
};

// export const addRefreshToken = async (refreshToken : String) => {
//     try{
//         const [result] : Array<any> = await pool.query(`INSERT INTO refresh_token (token) VALUES (?)`, refreshToken)
//         return true
//     } catch {
//         return false
//     }

// }
// export const checkRefreshToken = async (refreshToken : String) => {
//     const [result] : Array<any> = await pool.query(`SELECT * FROM refresh_token WHERE token = ?;`, refreshToken)

//     return result.length == 0
// }
// export const deleteRefreshToken = async (refreshToken : String) => {
//     // TODO: Delete token from db
//     try{
//         const [result] : Array<any> = await pool.query(`INSERT INTO refresh_token (token) VALUES (?)`, refreshToken)
//         return true
//     } catch {
//         return false
//     }
// }
