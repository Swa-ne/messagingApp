import { useEffect, useState } from "react";
import DefaultProps from "../../../../types/defaultProps";
import ChatInputBox from "../chatBox/chatInputBox";
import MainChat from "../chatBox/mainChat";
import { Chat, InboxDetails, PersonChatProps } from "../../../../types/chat";
import { getMessage, saveMessage } from "../../../../services/chat";

interface ChatMainBoxProps extends DefaultProps {
    messages?: Chat[],
    details?: InboxDetails,
    activeDetails?: PersonChatProps[]
}
export default function ChatMainBox({ socket, messages, details, activeDetails }: ChatMainBoxProps) {
    const [currentMessages, setCurrentMessages] = useState<Chat[]>([])
    const [receiverName, setReceiverName] = useState<string>("")
    const addMessage = async (message: Chat) => {
        if (details && currentMessages && socket && activeDetails) {
            message = { ...message, chatId: details._id }
            if (await saveMessage({ message: message.message, chatId: message.chatId })) {
                socket.emit("send-msg", {
                    userId: activeDetails[0].userId,
                    msg: message,
                });
                setCurrentMessages((prevState) => [message, ...prevState])
            }
        }
    }
    const updateMessage = async (page: number) => {
        if (details && page) {
            const messages = await getMessage(details?._id, page.toString())
            setCurrentMessages((prevState) => [...prevState, ...messages])
        }
    }
    useEffect(() => {
        if (socket) {
            socket.on("msg-recieve", (message) => {
                setCurrentMessages((prevState) => [message, ...prevState])
            });
        }
    }, [socket])
    useEffect(() => {
        if (messages && activeDetails) {
            setCurrentMessages(messages)
            setReceiverName(activeDetails[0].fullName)
        }
    }, [messages, activeDetails])
    return (
        <>
            <MainChat updateMessage={updateMessage} messages={currentMessages} fullName={receiverName} />
            <ChatInputBox addMessage={addMessage} />
        </>
    )
}