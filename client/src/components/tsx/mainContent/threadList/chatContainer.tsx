import ChatList from "./chatContainer/chatList";
import SearchBar from "./chatContainer/searchBar";
// import SearchList from "./chatContainer/searchList";

export default function ChatContainer() {
    return (
        <div className='w-full h-full bg-dark-background overflow-y-scroll'>
            <h3 className="text-center py-3">
                ChatList
            </h3>
            <SearchBar />
            <ChatList />
            {/* <SearchList /> */}
        </div>
    );
}
