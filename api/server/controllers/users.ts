import { Request, Response } from "express";
import { UserType } from "../middleware/authentication";
import { ActiveUsers, User } from "../models/user";
import { getAllActiveUsers } from "../services/user";

export const getAllActiveUsersController = async (req: Request & { user?: UserType }, res: Response): Promise<any> => {
    try {
        const { userId } = req.user || {};
        if (!userId) {
            return res.status(400).json({ message: 'User ID not provided' });
        }
        const result = await getAllActiveUsers(userId)

        return res.status(200).json({ message: result });
    } catch (error) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};