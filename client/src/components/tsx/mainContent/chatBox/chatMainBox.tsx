import { useEffect, useState } from "react";
import DefaultProps from "../../../../types/defaultProps";
import ChatInputBox from "../chatBox/chatInputBox";
import MainChat from "../chatBox/mainChat";
import { Chat, InboxDetails, PersonChatProps } from "../../../../types/chat";
import { getMessage, saveMessage } from "../../../../services/chat";
import { cookies } from "../../../../services/entry";
import { useDispatch } from "react-redux";
import { toggle } from "../../../../state/toggleComponent/toggleComponent";

interface ChatMainBoxProps extends DefaultProps {
    messages?: Chat[],
    details?: InboxDetails,
    activeDetails?: PersonChatProps[]
}
export default function ChatMainBox({ socket, messages, details, activeDetails }: ChatMainBoxProps) {
    const [currentMessages, setCurrentMessages] = useState<Chat[]>([])
    const [receiverName, setReceiverName] = useState<string>("")
    const userId = cookies.get("userId")
    const dispatch = useDispatch()
    const addMessage = async (message: Chat) => {
        if (details && currentMessages && socket && activeDetails) {
            message = { ...message, chatId: details._id }
            if (await saveMessage({ message: message.message, chatId: message.chatId })) {
                socket.emit("send-msg", {
                    userId: activeDetails[0].userId === userId ? activeDetails[1].userId : activeDetails[0].userId,
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
        if (socket && details) {
            socket.on("msg-recieve", (message) => {
                if (message.chatId === details._id) {
                    setCurrentMessages((prevState) => [message, ...prevState])
                }
                dispatch(toggle())
            });
        }
    }, [socket, details])
    useEffect(() => {
        if (messages && activeDetails?.length) {

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