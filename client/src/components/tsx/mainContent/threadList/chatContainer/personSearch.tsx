import { useEffect, useState } from "react";
import { PersonChatProps } from "../../../../../types/chat";

export default function PersonSearch({ profile, fullName }: PersonChatProps): React.ReactElement {
    const [isOnline, setIsOnline] = useState(true)
    useEffect(() => {
        setIsOnline(true)
    }, [])
    return (
        <div className={`thread-list w-11/12 h-[30px] hover:bg-opacity-30 flex py-1 rounded my-[1px] cursor-pointer`}>
            <div className="w-[30px] mr-2 relative">
                <div className="w-full h-full object-cover rounded-full overflow-hidden">
                    <img src={profile} className="w-full h-full object-cover" />
                </div>
                {isOnline && <div className="bg-green-400 w-2 h-2 rounded-full absolute bottom-0 right-0 z-10"></div>}
            </div>
            <div className=" flex flex-col justify-center">
                <h4 className="font-normal text-clip"> {fullName} </h4>
            </div>
        </div>
    );
}
