import { PersonChatProps } from "../../../../../types/chat";
import PersonSearch from "./personSearch";

const mockData: PersonChatProps[] = [
    {
        profile: 'https://i.pinimg.com/originals/58/51/2e/58512eb4e598b5ea4e2414e3c115bef9.jpg',
        name: 'John FFD df sdFD',
        chat: {
            message: 'Hello there!',
            sender: 'John',
            receiver: 'Jane',
            isRead: true,
            timestamp: '2024-05-08T12:00:00'
        }
    },
    {
        profile: 'https://i.pinimg.com/originals/58/51/2e/58512eb4e598b5ea4e2414e3c115bef9.jpg',
        name: 'Jane',
        chat: {
            message: 'Hi John!',
            sender: 'Jane',
            receiver: 'John',
            isRead: true,
            timestamp: '2024-05-08T12:01:00'
        }
    },
    {
        profile: 'https://i.pinimg.com/originals/58/51/2e/58512eb4e598b5ea4e2414e3c115bef9.jpg',
        name: 'Alice',
        chat: {
            message: 'Hey folks!',
            sender: 'Alice',
            receiver: 'Bob',
            isRead: false,
            timestamp: '2024-05-08T12:02:00'
        }
    }
];

export default function SearchList() {
    return (
        <div className='w-full bg-dark-background flex flex-col items-center py-3'>
            {mockData.map((data, idx) =>
                <PersonSearch key={idx} {...data} />
            )}
        </div>
    );
}
