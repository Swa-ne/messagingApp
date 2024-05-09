import { useEffect, useState } from "react"
import MoreIcon from "../../../../assets/more";

export default function ChatBoxHeader() {
    const [isOnline, setIsOnline] = useState(true)
    useEffect(() => {
        setIsOnline(true)
    }, [])
    return (
        <div className='w-auto h-[40px] px-3 flex items-center justify-between py-1 my-[1px] cursor-default'>
            <div className="w-[50%] flex">
                <div className="w-[40px] mr-2 relative">
                    <div className="w-full h-full object-cover rounded-full overflow-hidden">
                        {/* <img src={profile} className="w-full h-full object-cover" /> */}
                        <img src='https://i.pinimg.com/originals/58/51/2e/58512eb4e598b5ea4e2414e3c115bef9.jpg' className="w-full h-full object-cover" />
                    </div>
                    {isOnline && <div className="bg-green-400 w-2 h-2 rounded-full absolute bottom-0 right-0 z-10"></div>}
                </div>
                <div className=" flex flex-col justify-center w-[85%]">
                    {/* <h4 className="font-normal line-clamp-1"> {name} </h4> */}
                    <h4 className="font-normal line-clamp-1"> John sdf sdaf sk lfjsldf hsfkh asakhf ksah asf sa fasf sa kfhas</h4>
                </div>
            </div>
            <MoreIcon />
        </div>
    );
}
