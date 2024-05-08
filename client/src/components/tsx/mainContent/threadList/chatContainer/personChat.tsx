import { PersonChatProps } from "../../../../../types/chat";
import { formatTimestamp } from "../../../../../utils/convertTime";

export default function PersonChat({ profile, name, chat }: PersonChatProps): React.ReactElement {
    return (
        <div className='thread-list w-11/12 h-[50px] bg-light-accent flex py-2 rounded'>
            <div className="w-[45px] p-1 mr-1 relative">
                <div className="w-full h-full object-cover rounded-full overflow-hidden">
                    <img src={profile} className="w-full h-full object-cover" />
                </div>
                <div className="bg-green-500 w-4 h-4 rounded-full absolute bottom-0 right-0 z-10"></div>
            </div>
            <div className="w-3/4 flex flex-col justify-center">
                <h4 className={`${!chat.isRead ? 'font-bold' : "font-normal"}`}> {name} </h4>
                <p className="text-xs">
                    <span className={`${!chat.isRead && 'font-bold'} text-ellipsis overflow-hidden max-w-[80%]`}>
                        {chat.sender ? `You: ${chat.message}` : chat.message}
                    </span>
                    <span>{formatTimestamp(chat.timestamp)}</span>
                </p>
            </div>
        </div>
    );
}