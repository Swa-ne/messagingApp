import { useSelector } from "react-redux";
import ChatBox from "./chatBox";
import ChatDetails from "./chatDetails";
import { RootState } from "../../../state/store";
import DefaultProps from "../../../types/defaultProps";

export default function RightSideContent({ socket }: DefaultProps) {
    const showDetails = useSelector((state: RootState) => state.toggle.isVisible)
    return (
        <div className='w-[70%] flex'>
            <ChatBox socket={socket} />
            {showDetails && <ChatDetails />}
        </div>
    )
}