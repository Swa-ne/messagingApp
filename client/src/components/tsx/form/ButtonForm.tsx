interface ButtonFormProps {
    value: string;
}
const ButtonForm: React.FC<ButtonFormProps> = ({ value }) => {
    return <input value={value} type='button' className='h-11 rounded-md px-7 font-extrabold bg-dark-accent hover:opacity-80 duration-500' />;
};

export default ButtonForm;
