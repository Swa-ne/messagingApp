import SideBar from '../components/tsx/mainContent/sidebar';

export default function MainContent() {
    return (
        <div className='bg-dark-background h-auto md:overflow-y-hidden md:h-screen md:w-screen flex justify-center items-center'>
            <div className='bg-dark-primary w-screen md:w-11/12 md:h-95p md:rounded-2xl flex flex-col md:flex-row'>
                <SideBar />
                MainContent
            </div>
        </div>
    );
}
