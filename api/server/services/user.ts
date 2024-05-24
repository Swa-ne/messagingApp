import { Inbox, InboxSchemeInterface, Message } from "../models/chat";
import { ActiveUsers, User } from "../models/user"

export async function getAllActiveUsers(userId?: string) {
    try {
        const result = await ActiveUsers.find({ userId: { $ne: userId }, active: { $ne: "0" } })
        return result
    } catch {
        return "Internal server error"
    }
}
export async function getInbox(userId: string) {
    try {
        const user = await User.findById(userId).populate({
            path: 'inbox',
            match: { wasActive: true },
            options: { sort: { 'lastMessage': -1 } },
            populate: [
                {
                    path: 'lastMessage',
                    model: 'Message'
                },
                {
                    path: 'userIds',
                    model: 'ActiveUsers'
                }
            ]
        });
        if (!user) {
            return 'User not found';
        }

        return user.inbox;
    } catch (error) {
        console.error('Error fetching inbox:', error);
        throw error;
    }
}