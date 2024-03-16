import { useState } from 'react';
import LoginPageForm from './loginPageForm';
import SignupPageForm from './signupPageForm';

const LoginForm: React.FC = () => {
    const [showLogin, setShowLogin] = useState<boolean>(true);

    const showLoginChange = () => {
        setShowLogin((prevState) => !prevState);
    };

    return <>{showLogin ? <LoginPageForm changePage={showLoginChange} /> : <SignupPageForm changePage={showLoginChange} />}</>;
};

export default LoginForm;
