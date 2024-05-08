export interface Chat {
    message: string,
    sender: string,
    reciever: string,
    isRead: boolean,
    timestamp: string
}


export interface PersonChatProps {
    profile: string,
    name: string,
    chat: Chat,
    isActive?: boolean
}