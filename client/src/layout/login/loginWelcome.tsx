import { useLottie } from 'lottie-react';
import animationData from '../../assets/animation/welcome.json';

const LoginWelcome: React.FC = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const { View } = useLottie(defaultOptions);
    return (
        <div className='bg-dark-accent w-full md:w-1/2  md:rounded-s-xl flex items-center'>
            <div className='w-full h-fit'>{View}</div>
        </div>
    );
};

export default LoginWelcome;
