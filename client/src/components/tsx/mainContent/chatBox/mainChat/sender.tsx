import { timestampToDate } from "../../../../../utils/convertTime";

interface SenderChatProps {
    message: string,
    createdAt: string
}
export default function SenderBox({ message, createdAt }: SenderChatProps) {
    return (
        <div className='max-w-[80%] rounded-xl rounded-br-sm p-2 m-[1px] mr-2 self-end bg-white' title={timestampToDate(createdAt)}>
            <p className="whitespace-pre-wrap break-all text-black">
                {message}
            </p>
        </div>
    );
}
