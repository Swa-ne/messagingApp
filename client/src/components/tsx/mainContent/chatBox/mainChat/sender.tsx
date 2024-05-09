interface SenderChatProps {
    message: string,
    timestamp: string
}
export default function SenderBox({ message, timestamp }: SenderChatProps) {
    return (
        <div className='w-[80%] rounded-xl rounded-br-sm p-2 m-[1px] self-end bg-blue-400'>
            <p className="whitespace-pre-wrap break-all">
                {message}
            </p>
        </div>
    );
}
