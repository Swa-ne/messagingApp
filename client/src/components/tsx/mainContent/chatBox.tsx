import ChatBoxHeader from "./chatBox/header";

export default function ChatBox() {
    return (
        <div className='Chat-box w-[64%] flex justify-between items-center p-2 flex-col '>
            <div className='w-full h-full bg-gray-900'>
                <ChatBoxHeader />
            </div>
        </div>
    );
}
