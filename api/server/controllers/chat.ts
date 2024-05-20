import { Request, Response } from "express";
import { UserType } from "../middleware/authentication";
import { getAllActiveUsers } from "../services/user";
import { createInbox } from "../services/chat";

export const getChatMessagesController = async (req: Request & { user?: UserType }, res: Response): Promise<any> => {
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
export const createPrivateInboxController = async (req: Request & { user?: UserType }, res: Response): Promise<any> => {
    try {
        const { userId } = req.user || {};
        const { userId2 } = req.query;
        if (!userId || !userId2) {
            return res.status(400).json({ message: 'User ID not provided' });
        }
        const result = await createInbox([userId, userId2 as string], false)

        return res.status(200).json({ message: result.message });
    } catch (error) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
