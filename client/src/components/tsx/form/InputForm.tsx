import '../../scss/form/InputForm.scss';

interface InputFormProps {
    placeholder: string;
    type: string;
    width?: string;
}

const InputForm: React.FC<InputFormProps> = ({ placeholder, type, width = '' }) => {
    return <input placeholder={placeholder} type={type} className={`inputFormButton ${width} text-light-text h-11 rounded-md`} />;
};

export default InputForm;
