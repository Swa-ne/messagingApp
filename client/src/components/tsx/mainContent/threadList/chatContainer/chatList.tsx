import { useEffect, useState } from "react";
import { Chat, PersonChatProps } from "../../../../../types/chat";
import PersonChat from "./personChat";
import { getInbox } from "../../../../../services/users";
import { cookies } from "../../../../../services/entry";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../state/store";
interface ChatList extends PersonChatProps {
    chatName: string,
    userIds: PersonChatProps[],
    lastMessage: Chat,
    isActive: boolean
}
export default function ChatList() {
    const [chatList, setChatList] = useState<ChatList[]>([])
    const userFullName = cookies.get("userFullName")
    const showDetails = useSelector((state: RootState) => state.toggle.isVisible)
    useEffect(() => {
        async function fetchData() {
            setChatList(await getInbox())
        }
        fetchData()
        console.log(showDetails)
    }, [showDetails])
    return (
        <div className='w-full bg-dark-background flex flex-col items-center py-3'>
            {chatList && chatList.map((data, idx) => {
                data.chatName = data.chatName === "" ? data.userIds[0].fullName === userFullName ? data.userIds[1].fullName : data.userIds[0].fullName : data.chatName
                return <PersonChat key={idx} {...data} />
            })}
        </div>
    );
}
