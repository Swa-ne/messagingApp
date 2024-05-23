import { Request, Response } from "express";
import { UserType } from "../middleware/authentication";
import { getAllActiveUsers } from "../services/user";
import { createInbox, getChatMessages, getInboxDetails, saveMessage } from "../services/chat";

export const getChatMessagesController = async (req: Request & { user?: UserType }, res: Response): Promise<Response<any, Record<string, any>>> => {
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
export const createPrivateInboxController = async (req: Request & { user?: UserType }, res: Response): Promise<Response<any, Record<string, any>>> => {
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
export const getInboxDetailsController = async (req: Request & { user?: UserType }, res: Response): Promise<Response<any, Record<string, any>>> => {
    try {
        const { userId } = req.user || {};
        const { chatId } = req.query;
        if (!userId) {
            return res.status(400).json({ message: 'User ID not provided' });
        }
        if (!chatId) {
            return res.status(400).json({ message: 'Chat ID not provided' });
        }
        const result = await getInboxDetails(chatId as string, userId)

        return res.status(200).json({ message: result.message });
    } catch (error) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};

export const saveMessageController = async (req: Request & { user?: UserType }, res: Response): Promise<Response<any, Record<string, any>>> => {
    try {
        const { userId } = req.user || {};
        const { message, chatId } = req.body;
        if (!userId) {
            return res.status(400).json({ message: 'User ID not provided' });
        }
        if (!chatId) {
            return res.status(400).json({ message: 'Chat ID not provided' });
        }
        const result = await saveMessage(message, userId, chatId)

        return res.status(200).json({ message: result.message });
    } catch (error) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
export const getMessagesController = async (req: Request & { user?: UserType }, res: Response): Promise<Response<any, Record<string, any>>> => {
    try {
        const { userId } = req.user || {};
        const { chatId, page = 1 } = req.query;
        if (!userId) {
            return res.status(400).json({ message: 'User ID not provided' });
        }
        if (!chatId) {
            return res.status(400).json({ message: 'Chat ID not provided' });
        }
        const result = await getChatMessages(chatId as string, page as string)

        return res.status(200).json({ message: result });
    } catch (error) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
};