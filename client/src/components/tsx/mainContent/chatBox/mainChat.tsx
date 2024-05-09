import { useEffect, useRef } from "react";
import ReceiverBox from "./mainChat/receiver";
import SenderBox from "./mainChat/sender";

export default function MainChat() {
    const containerRef = useRef<HTMLDivElement>(null);

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
                <SenderBox message="fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1" timestamp="a" />
                <SenderBox message="fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1" timestamp="a" />
                <SenderBox message="fasdfdad1" timestamp="a" />
                <ReceiverBox isLatest={true} profile='https://i.pinimg.com/originals/58/51/2e/58512eb4e598b5ea4e2414e3c115bef9.jpg' message="fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1fasdfdad1" timestamp="a" />
                <SenderBox message="fasdfdad1" timestamp="a" />
                <ReceiverBox profile='https://i.pinimg.com/originals/58/51/2e/58512eb4e598b5ea4e2414e3c115bef9.jpg' message="fasdfasf" timestamp="a" />
                <ReceiverBox profile='https://i.pinimg.com/originals/58/51/2e/58512eb4e598b5ea4e2414e3c115bef9.jpg' message="fasdfasf" timestamp="a" />
                <ReceiverBox profile='https://i.pinimg.com/originals/58/51/2e/58512eb4e598b5ea4e2414e3c115bef9.jpg' message="fasdfasf" timestamp="a" />
                <ReceiverBox profile='https://i.pinimg.com/originals/58/51/2e/58512eb4e598b5ea4e2414e3c115bef9.jpg' message="fasdfasf" timestamp="a" />
                <ReceiverBox isLatest={true} profile='https://i.pinimg.com/originals/58/51/2e/58512eb4e598b5ea4e2414e3c115bef9.jpg' message="fasdfasf" timestamp="a" />
            </div>
        </div>
    );
}
