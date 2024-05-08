import { useEffect, useState } from "react";
import { PersonChatProps } from "../../../../../types/chat";
import { formatTimestamp } from "../../../../../utils/convertTime";

export default function PersonChat({ profile, name, chat, isActive = false }: PersonChatProps): React.ReactElement {
    const [isOnline, setIsOnline] = useState(true)
    useEffect(() => {
        setIsOnline(true)
    }, [])
    return (
        <div className={`thread-list w-11/12 h-[50px] ${isActive && "bg-light-accent bg-opacity-60"} hover:bg-light-accent hover:bg-opacity-30 flex py-2 rounded my-[1px] cursor-pointer`}>
            <div className="w-[45px] p-1 mr-2 relative">
                <div className="w-full h-full object-cover rounded-full overflow-hidden">
                    <img src={profile} className="w-full h-full object-cover" />
                </div>
                {isOnline && <div className="bg-green-400 w-2 h-2 rounded-full absolute bottom-1 right-1 z-10"></div>}
            </div>
            <div className="w-3/4 flex flex-col justify-center">
                <h4 className={`${!chat.isRead ? 'font-bold' : "font-normal"}`}> {name} </h4>
                <p className="text-xs">
                    <span className={`${!chat.isRead && 'font-bold'} text-ellipsis overflow-hidden max-w-[80%]`}>
                        {chat.sender ? `You: ${chat.message}` : chat.message}
                    </span>
                    <span>{formatTimestamp(chat.timestamp)}</span>
                </p>
            </div>
        </div>
    );
}
