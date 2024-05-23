import { timestampToDate } from "../../../../../utils/convertTime";

interface ReceiverChatProps {
    profile: string,
    message: string,
    createdAt: string,
    isLatest?: boolean,
    fullName: string
}
export default function ReceiverBox({ profile, message, createdAt, isLatest = false, fullName }: ReceiverChatProps) {
    return (
        <div className="max-w-[80%] flex">
            <div className="w-[30px] h-[30px] mr-2 relative self-end">
                {isLatest &&
                    <div className="w-full h-full object-cover rounded-full overflow-hidden" title={fullName}>
                        <img src={profile} className="w-full h-full object-cover" />
                    </div>
                }
            </div>
            <div className='max-w-[80%] rounded-xl rounded-bl-sm p-2 m-[1px] self-start bg-gray-500' title={timestampToDate(createdAt)}>
                <p className="whitespace-pre-wrap break-all">
                    {message}
                </p>
            </div>
        </div>
    );
}
