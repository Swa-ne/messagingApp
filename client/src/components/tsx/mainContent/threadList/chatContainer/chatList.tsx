import { PersonChatProps } from "../../../../../types/chat";
import PersonChat from "./personChat";

const mockData: PersonChatProps[] = [
    {
        profile: 'https://i.pinimg.com/originals/58/51/2e/58512eb4e598b5ea4e2414e3c115bef9.jpg',
        name: 'John',
        chat: {
            message: 'Hello there!',
            sender: 'John',
            reciever: 'Jane',
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
            reciever: 'John',
            isRead: false,
            timestamp: '2024-05-08T12:01:00'
        }
    },
    {
        profile: 'https://i.pinimg.com/originals/58/51/2e/58512eb4e598b5ea4e2414e3c115bef9.jpg',
        name: 'Alice',
        chat: {
            message: 'Hey folks!',
            sender: 'Alice',
            reciever: 'Bob',
            isRead: false,
            timestamp: '2024-05-08T12:02:00'
        }
    }
];

export default function ChatList() {
    return (
        <div className='thread-list w-full h-full bg-dark-background flex flex-col items-center'>
            {mockData.map((data, idx) =>
                <PersonChat key={idx} {...data} />
            )}
        </div>
    );
}
