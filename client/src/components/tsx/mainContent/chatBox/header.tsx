import { useEffect, useState } from "react"
// import MoreIcon from "../../../../assets/more";
// import { useDispatch } from "react-redux";
// import { toggle } from "../../../../state/toggleComponent/toggleComponent";
import { InboxDetails, PersonChatProps } from "../../../../types/chat";
import { cookies } from "../../../../services/entry";

interface ChatBoxHeaderProps {
    details?: InboxDetails,
    activeDetails?: PersonChatProps[]
}

export default function ChatBoxHeader({ details, activeDetails }: ChatBoxHeaderProps) {
    const userFullName = cookies.get("userFullName")
    const [name, setName] = useState("")
    const [profile, setProfile] = useState("https://i.pinimg.com/originals/58/51/2e/58512eb4e598b5ea4e2414e3c115bef9.jpg")
    const [isOnline, setIsOnline] = useState(true)
    // const dispatch = useDispatch()
    useEffect(() => {
        setIsOnline(true)
    }, [])
    useEffect(() => {
        if (details && activeDetails?.length) {
            if (!details.isGroup) setName(details.chatName === "" ? activeDetails[0].fullName === userFullName ? activeDetails[1].fullName : activeDetails[0].fullName : details.chatName)
            else setName(details.chatName === "" ? `${activeDetails[0].fullName}, ${activeDetails[1].fullName}` : details.chatName)
            setProfile(details.profile)
        }
    }, [details, activeDetails, userFullName])
    // const showDetailsOnClick = () => {
    //     dispatch(toggle())
    // }
    return (
        <div className='w-auto h-[40px] px-3 flex items-center justify-between py-1 my-[1px] cursor-default'>
            <div className="w-[50%] flex">
                <div className="w-[40px] mr-2 relative">
                    <div className="w-full h-full object-cover rounded-full overflow-hidden">
                        <img src={profile} className="w-full h-full object-cover" />
                    </div>
                    {isOnline && <div className="bg-green-400 w-2 h-2 rounded-full absolute bottom-0 right-0 z-10"></div>}
                </div>
                <div className=" flex flex-col justify-center w-[85%]">
                    <h4 className="font-normal line-clamp-1"> {name} </h4>
                </div>
            </div>
            {/* <MoreIcon /> */}
        </div>
    );
}
