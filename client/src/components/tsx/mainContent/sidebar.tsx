import ChatIcon from '../../../assets/chat';
import PeopleIcon from '../../../assets/people';
import SettignsIcon from '../../../assets/settings';
import LogoutIcon from '../../../assets/logout';
import { Link } from 'react-router-dom';

export default function SideBar() {
    return (
        <div className='sidebar w-[30px] flex justify-between items-center p-3 flex-col'>
            <div className='h-1/4 flex flex-col justify-around'>
                <Link to="/">
                    <ChatIcon />
                </Link>
                <Link to="/active">
                    <PeopleIcon />
                </Link>
                <SettignsIcon />
            </div>
            <div className='flex flex-col justify-around'>
                <LogoutIcon />
            </div>
        </div>
    );
}
