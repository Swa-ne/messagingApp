import { useSelector } from "react-redux";
import ChatBox from "./chatBox";
import ChatDetails from "./chatDetails";
import { RootState } from "../../../state/store";

export default function RightSideContent() {
    const showDetails = useSelector((state: RootState) => state.toggle.isVisible)
    return (
        <div className='w-[70%] flex'>
            <ChatBox />
            {showDetails && <ChatDetails />}
        </div>
    )
}