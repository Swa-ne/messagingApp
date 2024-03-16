import ButtonForm from '../../components/tsx/form/ButtonForm';
import InputForm from '../../components/tsx/form/InputForm';

interface signupPageFormProps {
    changePage: () => void;
}

const SignupPageForm: React.FC<signupPageFormProps> = ({ changePage }) => {
    return (
        <div className='h-screen flex flex-col justify-center items-center md:h-full md:w-1/2 rounded-e-xl'>
            <div className='w-95p h-4/6'>
                <form className='w-full h-full flex flex-col justify-around items-center' method='post'>
                    <div className='text-center'>
                        <h1>SIGN UP</h1>
                        <span>Welcome back you've been missed!</span>
                    </div>
                    <div className='w-full sm:w-4/5 lg:w-3/5 h-4/6 flex flex-col justify-around items-center'>
                        <div className='w-full flex justify-between'>
                            <InputForm width='w-44p' placeholder='First name' type='text' />
                            <InputForm width='w-44p' placeholder='Last name' type='text' />
                        </div>
                        <InputForm placeholder='Username' type='text' />
                        <InputForm placeholder='Email' type='text' />
                        <InputForm placeholder='Password' type='password' />
                        <InputForm placeholder='Repeat Password' type='password' />
                    </div>
                    <ButtonForm value='Submit' />
                </form>
            </div>
            <p className='mt-6 text-center text-xs'>
                Already have an account?{' '}
                <label className='cursor-pointer text-light-text hover:underline' onClick={changePage}>
                    Login
                </label>
            </p>
        </div>
    );
};

export default SignupPageForm;
