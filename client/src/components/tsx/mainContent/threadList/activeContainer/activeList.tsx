import { PersonChatProps } from "../../../../../types/chat";
import PersonSearch from "../chatContainer/personSearch";

interface ActiveListProps {
    activePeople: PersonChatProps[]
}
export default function ActiveList({ activePeople }: ActiveListProps) {
    return (
        <div className='w-full bg-dark-background flex flex-col items-center pb-3'>
            {activePeople.map((data, idx) =>
                <PersonSearch key={idx} {...data} />
            )}
        </div>
    );
}
