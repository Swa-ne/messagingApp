import { Link, useNavigate } from "react-router-dom";
import { PersonChatProps } from "../../../../../types/chat";
import PersonSearch from "../chatContainer/personSearch";
import { createInbox } from "../../../../../services/chat";

interface ActiveListProps {
    activePeople: PersonChatProps[]
}
export default function ActiveList({ activePeople }: ActiveListProps) {
    const navigate = useNavigate();
    const handleClick = async (userId: string | undefined) => {
        if (userId) {
            const inbox = await createInbox(userId)
            navigate(`/active/${inbox._id}`);
        }
    }
    return (
        <div className='m-2 bg-dark-primary rounded-lg shadow-lg flex flex-col items-center hover-brightness'>
            {activePeople.map((data, idx) =>
                <Link key={idx} to="" onClick={async () => await handleClick(data.userId)} style={{ textDecoration: 'none', color: 'inherit' }} className="w-11/12">
                    <PersonSearch {...data} />
                </Link>
            )}
        </div>
    );
}
