import { Route, Routes } from 'react-router-dom';
import ChatContainer from '../components/tsx/mainContent/threadList/chatContainer';
import ActiveContainer from '../components/tsx/mainContent/threadList/activeContainer';
import DefaultProps from '../types/defaultProps';


export default function ThreadListRoutes({ socket }: DefaultProps) {
    return (
        <Routes>
            <Route path='/' element={<ChatContainer />} />
            <Route path='/:id' element={<ChatContainer />} />
            <Route path='/active/' element={<ActiveContainer socket={socket} />} />
            <Route path='/active/:id' element={<ActiveContainer socket={socket} />} />
        </Routes>
    );
}