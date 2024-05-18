export interface Chat {
    message: string,
    sender: string,
    chatId: string,
    isRead: boolean,
    timestamp: string
}


export interface PersonChatProps {
    userId?: string,
    profile: string,
    fullName: string,
    chat: Chat,
    isActive?: boolean
}