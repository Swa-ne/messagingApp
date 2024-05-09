import ChatInputBox from "./chatBox/chatInputBox";
import ChatBoxHeader from "./chatBox/header";
import MainChat from "./chatBox/mainChat";

export default function ChatBox() {
    return (
        <div className='Chat-box w-[64%] flex justify-between items-center p-2 flex-col '>
            <div className='w-full h-full bg-gray-900 flex flex-col'>
                <ChatBoxHeader />
                <MainChat />
                <ChatInputBox />
            </div>
        </div>
    );
}
