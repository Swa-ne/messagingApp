import mongoose from "mongoose";
import { Inbox, Message } from "../models/chat"

export async function getChatMessages(chatId?: string) {
    try {
        const result = await Message.find({ chatId })
        return result
    } catch (error) {
        return { message: error, httpCode: 500 };
    }
}
export async function storeMessage(message: string, senderId: string, chatId: string) {
    try {
        new Message({ message, senderId, chatId }).save()
        return { 'message': 'success', "httpCode": 200 };
    } catch (error) {
        return { message: error, httpCode: 500 };
    }
}
export async function createInbox(userIds: string[], isGroup: boolean, chatName?: string, profile?: string) {
    try {
        const availableInbox = await inboxAvailable(userIds, isGroup)
        if (!availableInbox) {
            const wasActive = isGroup
            const inbox = await new Inbox({ userIds, chatName, profile, isGroup, wasActive }).save()
            return { 'message': inbox, "httpCode": 200 };
        }
        return { 'message': availableInbox, "httpCode": 200 };
    } catch (error) {
        return { message: error, httpCode: 500 };
    }
}
export async function inboxAvailable(userIds: string[], isGroup: boolean) {
    try {
        const objectIds = userIds.map((id: string) => new mongoose.Types.ObjectId(id));

        const inbox = await Inbox.findOne({
            userIds: { $all: objectIds, $size: objectIds.length },
            isGroup
        });
        return inbox
    } catch (error) {
        return { message: error, httpCode: 500 };
    }
}