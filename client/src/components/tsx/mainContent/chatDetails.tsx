import ChatProfile from "./chatDetails/ChatProfile";

export default function ChatDetails() {
    return (
        <div className='w-72 flex justify-center items-center p-2 flex-col'>
            <div className='w-full h-full bg-gray-900 flex flex-col'>
                <ChatProfile />
            </div>
        </div>
    );
}
