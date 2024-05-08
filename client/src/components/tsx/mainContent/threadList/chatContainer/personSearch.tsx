import { PersonChatProps } from "../../../../../types/chat";

export default function PersonSearch({ profile, name }: PersonChatProps): React.ReactElement {
    return (
        <div className={`thread-list w-11/12 h-[30px] hover:bg-opacity-30 flex py-1 rounded my-[1px] cursor-pointer`}>
            <div className="w-[30px] mr-2">
                <div className="w-full h-full object-cover rounded-full overflow-hidden">
                    <img src={profile} className="w-full h-full object-cover" />
                </div>
            </div>
            <div className=" flex flex-col justify-center">
                <h4 className="font-normal text-clip"> {name} </h4>
            </div>
        </div>
    );
}
