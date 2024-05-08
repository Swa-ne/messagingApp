import ChatContainer from "./threadList/chatContainer";

export default function ThreadList() {
    return (
        <div className='w-[360px] flex justify-between items-center py-2 flex-col'>
            <ChatContainer />
        </div>
    );
}
