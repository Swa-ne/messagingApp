import { useEffect, useRef } from "react";
import ReceiverBox from "./mainChat/receiver";
import SenderBox from "./mainChat/sender";
import { Chat } from "../../../../types/chat";
import { cookies } from "../../../../services/entry";

interface MainChatProps {
    messages: Chat[]
}
export default function MainChat({ messages }: MainChatProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const userId = cookies.get("userId")
    // Function to scroll to the bottom
    const scrollToBottom = () => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    };
    useEffect(() => {
        scrollToBottom();
    }, []);
    return (
        <div className='w-auto max-h-[85%] m-1 cursor-default overflow-y-scroll' ref={containerRef}>
            <div className="w-full flex flex-col justify-end">
                {messages.map((message: Chat) => {
                    if (message.sender === userId) {
                        return <SenderBox {...message} />
                    }
                    return <ReceiverBox isLatest={true} profile='https://i.pinimg.com/originals/58/51/2e/58512eb4e598b5ea4e2414e3c115bef9.jpg' {...message} />
                })}
            </div>
        </div>
    );
}
