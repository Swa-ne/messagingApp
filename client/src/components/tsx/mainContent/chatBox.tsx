import { useLocation } from "react-router-dom";
import DefaultProps from "../../../types/defaultProps";
import ChatMainBox from "./chatBox/chatMainBox";
import ChatBoxHeader from "./chatBox/header";
import { useEffect, useState } from "react";
import { getInboxDetails } from "../../../services/users";
import { Chat, InboxDetails, PersonChatProps } from "../../../types/chat";

interface InboxDetailsProps {
    messages: Chat[],
    details: InboxDetails,
    activeDetails: PersonChatProps[]
}

export default function ChatBox({ socket }: DefaultProps) {
    const [inboxDetails, setInboxDetails] = useState<InboxDetailsProps | null>(null)
    const [id, setId] = useState<string | null>(null);
    const location = useLocation();

    useEffect(() => {
        const pathname = location.pathname;
        const pathSegments = pathname.split('/').filter(segment => segment !== '');

        if (pathSegments.length >= 2) {
            setId(pathSegments[1]);
        } else {
            setId(pathSegments[0] !== "active" ? pathSegments[0] : null)
        }
    }, [location]);

    useEffect(() => {
        async function fetchData() {
            if (id) {
                setInboxDetails(await getInboxDetails(id))
            }
        }
        fetchData()
    }, [id])

    return (
        <div className='chat-box w-full h-98p flex justify-between items-center p-2 flex-col'>
            <div className='w-full h-full bg-gray-900 flex flex-col'>
                <ChatBoxHeader {...inboxDetails} />
                <ChatMainBox {...inboxDetails} socket={socket} />
            </div>
        </div>
    );
}
