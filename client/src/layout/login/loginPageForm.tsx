import { useState } from 'react';
import ButtonForm from '../../components/tsx/form/ButtonForm';
import InputForm from '../../components/tsx/form/InputForm';
import { cookies, login } from '../../services/entry';
import { useNavigate } from 'react-router-dom';

interface signupPageFormProps {
    changePage: () => void;
}

const LoginPageForm: React.FC<signupPageFormProps> = ({ changePage }) => {
    const navigate = useNavigate()

    const [emailAddress, setEmailAddress] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const onLogin = async () => {
        const result = await login({ emailAddress, password })
        if (result.loginUpdate === "success") {
            cookies.set("authorization", result.accessToken);
            cookies.set("userFullName", result.userFullName);
            cookies.set("userId", result.userId);

            navigate("/");
            window.location.reload();
        } else {
            setError(result)
        }

    }

    return (
        <div className='h-screen flex flex-col justify-center items-center md:h-full md:w-1/2 rounded-e-xl'>
            <div className='w-95p h-1/2'>
                <form className='w-full h-4/5 flex flex-col justify-between items-center' method='post'>
                    <div className='text-center'>
                        <h1>LOG IN</h1>
                        <span>Welcome back you've been missed!</span>
                    </div>
                    <span className='text-xs text-red-500'>{error}</span>
                    <div className='w-full sm:w-4/5 lg:w-3/5 h-3/6 flex flex-col justify-around'>
                        <InputForm onChange={(e) => setEmailAddress(e.target.value)} value={emailAddress} placeholder='Email or Username' type='text' />
                        <InputForm onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password' type='password' />
                        <p className='text-xs text-right'>
                            <label className='cursor-pointer hover:underline hover:text-opacity-70'>Recovery Password</label>
                            {/* TODO */}
                        </p>
                    </div>
                    <ButtonForm value='Login' onClick={onLogin} />
                </form>
                <p className='mt-6 text-center text-xs'>
                    Not a member?{' '}
                    <label className='cursor-pointer text-light-text hover:underline' onClick={changePage}>
                        Register now
                    </label>
                </p>
            </div>
        </div>
    );
};

export default LoginPageForm;
