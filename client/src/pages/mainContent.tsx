import RightSideContent from '../components/tsx/mainContent/rightSideContent';
import SideBar from '../components/tsx/mainContent/sidebar';
import ThreadList from '../components/tsx/mainContent/threadList';
import DefaultProps from '../types/defaultProps';

export default function MainContent({ socket }: DefaultProps) {
    return (
        <div className='bg-dark-background h-auto md:overflow-y-hidden md:h-screen md:w-screen flex justify-center items-center'>
            <div className='bg-dark-primary w-screen md:w-11/12 md:h-95p md:rounded-2xl flex flex-col md:flex-row'>
                <SideBar />
                <ThreadList socket={socket} />
                <RightSideContent socket={socket} />
            </div>
        </div>
    );
}
