import mongoose from "mongoose";
import { Inbox, Message } from "../models/chat"
import { ActiveUsers } from "../models/user";

export async function getChatMessages(chatId: string, page: string) {
    try {
        const result = await Message.find({ chatId })
            .sort({ createdAt: -1 })
            .skip((parseInt(page) - 1) * 30)
            .limit(30);
        return result
    } catch (error) {
        return { message: error, httpCode: 500 };
    }
}
export async function saveMessage(message: string, senderId: string, chatId: string) {
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
export async function getInboxDetails(chatId: string, currentUserId: string) {
    try {
        const messages = await getChatMessages(chatId, "1")
        const details = await Inbox.findById(chatId)
        if (!details) {
            return { message: 'Chat ID not found', httpCode: 404 }
        }
        const stringUserIds = details.userIds.filter(id => id.toString() !== currentUserId.toString())
            .map(id => new mongoose.Types.ObjectId(id));
        const activeDetails = await ActiveUsers.find({ userId: { $in: stringUserIds } })
        return { message: { messages, details, activeDetails }, httpCode: 200 }
    } catch (error) {
        return { message: error, httpCode: 500 };
    }
}
