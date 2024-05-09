import { Route, Routes } from 'react-router-dom';
import ChatContainer from '../components/tsx/mainContent/threadList/chatContainer';
import ActiveContainer from '../components/tsx/mainContent/threadList/activeContainer';


export default function ThreadListRoutes() {
    return (
        <Routes>
            <Route path='/*' element={<ChatContainer />} />
            <Route path='/active*' element={<ActiveContainer />} />
        </Routes>
    );
}