import ActiveList from "./activeContainer/activeList";
import { useEffect, useState } from "react";
import DefaultProps from "../../../../types/defaultProps";
import { getActiveUsers } from "../../../../services/users";
import { cookies } from "../../../../services/entry";
import { PersonChatProps } from "../../../../types/chat";

export default function ActiveContainer({ socket }: DefaultProps) {
    const [activePeople, setActivePeople] = useState([])
    const userId = cookies.get("userId")
    useEffect(() => {
        if (socket) {
            socket.on("getOnlineUsers", (users) => {
                setActivePeople(() =>
                    users.filter((user: PersonChatProps) => user.userId !== userId))
            });
        }
    }, [socket, userId])
    useEffect(() => {
        async function fetchData() {
            setActivePeople((await getActiveUsers()).filter((user: PersonChatProps) => user.userId !== userId))
        }
        fetchData()
    }, [userId])
    return (
        <div className='w-full h-full bg-dark-background overflow-y-scroll'>
            <h3 className="p-3">
                People
                <br />
                <span className="text-xs font-light">Active People ({activePeople.length})</span>
            </h3>
            <ActiveList activePeople={activePeople} />
        </div>
    );
}
