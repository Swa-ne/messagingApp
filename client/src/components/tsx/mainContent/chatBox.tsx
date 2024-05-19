import DefaultProps from "../../../types/defaultProps";
import ChatMainBox from "./chatBox/chatMainBox";
import ChatBoxHeader from "./chatBox/header";

export default function ChatBox({ socket }: DefaultProps) {
    return (
        <div className='chat-box w-full h-98p flex justify-between items-center p-2 flex-col'>
            <div className='w-full h-full bg-gray-900 flex flex-col'>
                <ChatBoxHeader />
                <ChatMainBox socket={socket} />
            </div>
        </div>
    );
}
