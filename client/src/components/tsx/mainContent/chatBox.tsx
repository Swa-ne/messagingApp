import DefaultProps from "../../../types/defaultProps";
import ChatInputBox from "./chatBox/chatInputBox";
import ChatBoxHeader from "./chatBox/header";
import MainChat from "./chatBox/mainChat";

export default function ChatBox({ socket }: DefaultProps) {
    return (
        <div className='chat-box min-w-[60%] h-98p flex justify-between items-center p-2 flex-col'>
            <div className='w-full h-full bg-gray-900 flex flex-col'>
                <ChatBoxHeader />
                <MainChat />
                <ChatInputBox socket={socket} />
            </div>
        </div>
    );
}
