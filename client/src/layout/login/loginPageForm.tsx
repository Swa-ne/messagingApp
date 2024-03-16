import ButtonForm from '../../components/tsx/form/ButtonForm';
import InputForm from '../../components/tsx/form/InputForm';

interface signupPageFormProps {
    changePage: () => void;
}

const LoginPageForm: React.FC<signupPageFormProps> = ({ changePage }) => {
    return (
        <div className='h-screen flex flex-col justify-center items-center md:h-full md:w-1/2 rounded-e-xl'>
            <div className='w-95p h-1/2'>
                <form className='w-full h-4/5 flex flex-col justify-between items-center' method='post'>
                    <div className='text-center'>
                        <h1>LOG IN</h1>
                        <span>Welcome back you've been missed!</span>
                    </div>
                    <div className='w-full sm:w-4/5 lg:w-3/5 h-3/6 flex flex-col justify-around'>
                        <InputForm placeholder='Email or Username' type='text' />
                        <InputForm placeholder='Password' type='password' />
                        <p className='text-xs text-right'>
                            <label className='cursor-pointer hover:underline hover:text-opacity-70'>Recovery Password</label>
                            {/* TODO */}
                        </p>
                    </div>
                    <ButtonForm value='Submit' />
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
