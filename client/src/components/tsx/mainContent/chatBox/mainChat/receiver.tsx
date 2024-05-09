interface ReceiverChatProps {
    profile: string,
    message: string,
    timestamp: string,
    isLatest?: boolean
}
export default function ReceiverBox({ profile, message, timestamp, isLatest = false }: ReceiverChatProps) {
    return (
        <div className="w-[80%] flex">
            <div className="w-[30px] h-[30px] mr-2 relative self-end">
                {isLatest &&
                    <div className="w-full h-full object-cover rounded-full overflow-hidden">
                        <img src={profile} className="w-full h-full object-cover" />
                    </div>
                }
            </div>
            <div className='w-full rounded-xl rounded-bl-sm p-2 m-[1px] self-start bg-gray-500'>
                <p className="whitespace-pre-wrap break-all">
                    {message}
                </p>
            </div>
        </div>
    );
}
