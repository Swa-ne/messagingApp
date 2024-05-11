interface ButtonFormProps {
    value: string;
    onClick: () => void;
}
const ButtonForm: React.FC<ButtonFormProps> = ({ value, onClick }) => {
    return <input value={value} type='button' onClick={onClick} className='h-11 rounded-md px-7 font-extrabold bg-dark-accent hover:opacity-80 duration-500' />;
};

export default ButtonForm;
