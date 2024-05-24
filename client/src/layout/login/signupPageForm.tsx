import ButtonForm from '../../components/tsx/form/ButtonForm';
import InputForm from '../../components/tsx/form/InputForm';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import { signup } from '../../services/entry';
interface signupPageFormProps {
    changePage: () => void;
}
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});
const eighteenYearsAgo: Dayjs = dayjs().subtract(18, 'year');
const SignupPageForm: React.FC<signupPageFormProps> = ({ changePage }) => {

    const [selectedDate, setSelectedDate] = useState<Dayjs | null | undefined>(null);
    const [data, setData] = useState({ firstName: "", lastName: "", middleName: "", emailAddress: "", password: "", confirmationPassword: "", personalNumber: "", birthday: "" })
    const [error, setError] = useState("")


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };
    const submitFunction = async () => {
        if (!selectedDate) {
            return
        }
        const finalData = { ...data, birthday: selectedDate.toString() }
        const result = await signup(finalData)
        if (result === "success") {
            changePage()
        } else {
            setError(result)
        }
    }
    return (
        <div className='h-screen flex flex-col justify-center items-center md:h-full md:w-1/2 rounded-e-xl'>
            <div className='w-95p h-[90%]'>
                <form className='w-full h-full flex flex-col justify-around items-center' method='post'>
                    <div className='text-center'>
                        <h1>SIGN UP</h1>
                        <span>Welcome back you've been missed!</span>
                    </div>
                    <span className='text-xs text-red-500'>{error}</span>
                    <div className='w-full sm:w-4/5 lg:w-3/5 flex flex-col h-[75%] justify-around items-center'>
                        <InputForm placeholder='First name' type='text' name={"firstName"} value={data["firstName"]} onChange={handleInputChange} />
                        <InputForm placeholder='Middle name' type='text' name={"middleName"} value={data["middleName"]} onChange={handleInputChange} />
                        <InputForm placeholder='Last name' type='text' name={"lastName"} value={data["lastName"]} onChange={handleInputChange} />
                        <InputForm placeholder='Email' type='text' name={"emailAddress"} value={data["emailAddress"]} onChange={handleInputChange} />
                        <InputForm placeholder='Phone Number' type='text' name={"personalNumber"} value={data["personalNumber"]} onChange={handleInputChange} />
                        <InputForm placeholder='Password' type='password' name={"password"} value={data["password"]} onChange={handleInputChange} />
                        <InputForm placeholder='Repeat Password' type='password' name={"confirmationPassword"} value={data["confirmationPassword"]} onChange={handleInputChange} />
                        <ThemeProvider theme={darkTheme}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    maxDate={eighteenYearsAgo}
                                    value={selectedDate}
                                    onChange={(newValue) => setSelectedDate(newValue)}
                                />
                            </LocalizationProvider>
                        </ThemeProvider>
                    </div>
                    <ButtonForm value='Submit' onClick={submitFunction} />
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
