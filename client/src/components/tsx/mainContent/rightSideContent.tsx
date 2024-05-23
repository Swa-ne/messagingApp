// import { useSelector } from "react-redux";
import ChatBox from "./chatBox";
// import ChatDetails from "./chatDetails";
// import { RootState } from "../../../state/store";
import DefaultProps from "../../../types/defaultProps";
import { Route, Routes } from "react-router-dom";
import NoMainChat from "./NoMainChat";

export default function RightSideContent({ socket }: DefaultProps) {
    // const showDetails = useSelector((state: RootState) => state.toggle.isVisible)
    return (
        <div className='w-[70%] flex'>
            <Routes>
                <Route path='/' element={<NoMainChat />} />
                <Route path='/:id' element={<>
                    <ChatBox socket={socket} />
                    {/* {showDetails && <ChatDetails />} */}
                </>} />
                <Route path='/active/' element={<NoMainChat />} />
                <Route path='/active/:id' element={<>
                    <ChatBox socket={socket} />
                    {/* {showDetails && <ChatDetails />} */}
                </>} />
            </Routes>
        </div>
    )
}