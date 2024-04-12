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
        <div className='hidden bg-dark-accent absolute h-full w-full m-5 md:m-0 md:relative md:w-1/2  md:rounded-s-xl md:flex items-center'>
            <div className='w-full h-fit'>{View}</div>
        </div>
    );
};

export default LoginWelcome;
