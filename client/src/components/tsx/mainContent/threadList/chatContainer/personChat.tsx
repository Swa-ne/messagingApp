import { useEffect, useState } from "react";
import { Chat } from "../../../../../types/chat";
import { formatTimestamp } from "../../../../../utils/convertTime";
import { cookies } from "../../../../../services/entry";

interface PersonChatFunctionProps {
    profile: string,
    chatName: string,
    lastMessage: Chat,
    isActive: boolean
}
export default function PersonChat({ profile, chatName, lastMessage, isActive = false }: PersonChatFunctionProps): React.ReactElement {
    const [isOnline, setIsOnline] = useState(true)
    const userId = cookies.get("userId")
    useEffect(() => {
        setIsOnline(isActive)
    }, [isActive])
    return (
        <div className={`thread-list w-full h-[50px] ${isActive && "bg-light-accent bg-opacity-60"} hover:bg-light-accent hover:bg-opacity-30 flex py-2 rounded my-[1px] cursor-pointer`}>
            <div className="w-[45px] p-1 mr-2 relative">
                <div className="w-full h-full object-cover rounded-full overflow-hidden">
                    <img src={profile} className="w-full h-full object-cover" />
                </div>
                {isOnline && <div className="bg-green-400 w-2 h-2 rounded-full absolute bottom-1 right-1 z-10"></div>}
            </div>
            <div className="w-3/4 flex flex-col justify-center">
                <h4 className={`${!lastMessage.isRead ? 'font-bold' : "font-normal"}`}> {chatName} </h4>
                <p className="text-xs">
                    <span className={`${!lastMessage.isRead && 'font-bold'} text-ellipsis overflow-hidden max-w-[80%]`}>
                        {lastMessage.senderId === userId ? `You: ${lastMessage.message}` : lastMessage.message}
                    </span>
                    <span className="text-[8px]">{formatTimestamp(lastMessage.createdAt)}</span>
                </p>
            </div>
        </div>
    );
}
