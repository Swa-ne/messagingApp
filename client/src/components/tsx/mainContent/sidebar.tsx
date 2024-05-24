import ChatIcon from '../../../assets/chat';
import PeopleIcon from '../../../assets/people';
// import SettignsIcon from '../../../assets/settings';
import LogoutIcon from '../../../assets/logout';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../../../services/entry';
import { useEffect, useState } from 'react';

export default function SideBar() {
    const navigate = useNavigate()
    const [id, setId] = useState<string | null>(null);
    const location = useLocation();

    useEffect(() => {
        const pathname = location.pathname;
        const pathSegments = pathname.split('/').filter(segment => segment !== '');

        if (pathSegments.length >= 2) {
            setId(pathSegments[1]);
        } else {
            setId(pathSegments[0] !== "active" ? pathSegments[0] : null)
        }
    }, [location]);
    return (
        <div className='sidebar w-[30px] flex justify-between items-center p-3 flex-col'>
            <div className='h-1/6 flex flex-col justify-around'>
                <Link to={id ? `/${id}` : "/"}>
                    <ChatIcon />
                </Link>
                <Link to={id ? `/active/${id}` : "/active"}>
                    <PeopleIcon />
                </Link>
                {/* <SettignsIcon /> */}
            </div>
            <div className='flex flex-col justify-around' onClick={() => {
                logout()
                navigate("/")
                window.location.reload();
            }}>
                <LogoutIcon />
            </div>
        </div>
    );
}
