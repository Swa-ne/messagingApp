import { useEffect, useRef, useState } from "react";
import ReceiverBox from "./mainChat/receiver";
import SenderBox from "./mainChat/sender";
import { Chat } from "../../../../types/chat";
import { cookies } from "../../../../services/entry";
import ScrollToBottom from 'react-scroll-to-bottom';

interface MainChatProps {
    messages: Chat[],
    fullName: string,
    updateMessage: (page: number) => void;
}
export default function MainChat({ messages, fullName, updateMessage }: MainChatProps) {
    const userId = cookies.get("userId")
    const [page, setPage] = useState(0)
    useEffect(() => {
        setPage(0)
    }, [fullName])
    const bottomDivRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const bottomDiv = bottomDivRef.current;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (bottomDiv) {
                        setPage(prevState => prevState + 1);
                    }
                }
            });
        }, options);

        if (bottomDiv) {
            observer.observe(bottomDiv);
        }

        return () => {
            if (bottomDiv) {
                observer.unobserve(bottomDiv);
            }
        };
    }, []);
    useEffect(() => {
        updateMessage(page)
    }, [page])
    return (
        <div className='w-auto max-h-[85%] m-1 cursor-default' >
            <ScrollToBottom className="w-full h-full flex flex-col justify-end" scrollViewClassName="flex flex-col-reverse">
                {messages && messages.map((message: Chat, idx) => {
                    if (message.senderId === userId) {
                        return <SenderBox key={idx} {...message} />
                    }
                    const isLatest = idx - 1 > 0 ? messages[idx - 1].senderId === userId : true;
                    return <ReceiverBox fullName={fullName} key={idx} isLatest={isLatest} profile='https://i.pinimg.com/originals/58/51/2e/58512eb4e598b5ea4e2414e3c115bef9.jpg' {...message} />
                })}
                <div ref={bottomDivRef} style={{ opacity: 0 }}>a</div>
            </ScrollToBottom>
        </div>
    );
}
