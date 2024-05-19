import { useState } from "react";
import DefaultProps from "../../../../types/defaultProps";
import ChatInputBox from "../chatBox/chatInputBox";
import MainChat from "../chatBox/mainChat";
import { Chat } from "../../../../types/chat";

export default function ChatMainBox({ socket }: DefaultProps) {
    const [messages, setMessages] = useState<Chat[]>([])
    const addMessage = (message: Chat) => {
        setMessages((prevState) => [...prevState, message])
    }
    return <>
        <MainChat messages={messages} />
        <ChatInputBox socket={socket} /></>
}