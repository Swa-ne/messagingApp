export interface Chat {
    message: string,
    senderId: string,
    chatId: string,
    isRead: boolean,
    createdAt: string
}


export interface PersonChatProps {
    userId?: string,
    profile: string,
    fullName: string,
    chat: Chat,
    isActive?: boolean
}
export interface InboxDetails {
    chatName: string,
    createdAt: string,
    isGroup: boolean,
    profile: string,
    wasActive: boolean,
    _id: string
}