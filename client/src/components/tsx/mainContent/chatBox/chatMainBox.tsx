import { useState } from "react";
import DefaultProps from "../../../../types/defaultProps";
import ChatInputBox from "../chatBox/chatInputBox";
import MainChat from "../chatBox/mainChat";
import { Chat } from "../../../../types/chat";

interface ChatMainBoxProps extends DefaultProps {
    id: string | null
}
export default function ChatMainBox({ socket, id }: ChatMainBoxProps) {
    const [messages, setMessages] = useState<Chat[]>([])
    const addMessage = (message: Chat) => {
        if (id) {
            message = { ...message, chatId: id }
            setMessages((prevState) => [...prevState, message])
        }
    }
    return (
        <>
            <MainChat messages={messages} />
            <ChatInputBox socket={socket} addMessage={addMessage} />
        </>
    )
}