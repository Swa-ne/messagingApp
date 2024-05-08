import ChatList from "./chatContainer/chatList";
import SearchBar from "./chatContainer/searchBar";

export default function ChatContainer() {
    return (
        <div className='thread-list w-full h-full bg-dark-background overflow-y-scroll'>
            <h3 className="text-center py-3">
                ChatList
            </h3>
            <SearchBar />
            <ChatList />
        </div>
    );
}
