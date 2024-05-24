import { ChangeEvent } from 'react';
import '../../scss/form/InputForm.scss';

interface InputFormProps {
    placeholder: string;
    type: string;
    width?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    name?: string;
}

const InputForm: React.FC<InputFormProps> = ({ placeholder, type, width = '', value = "", onChange, name }) => {
    return <input placeholder={placeholder} onChange={onChange} type={type} name={name} value={value} className={`inputFormButton ${width} text-light-text h-11 rounded-md`} />;
};

export default InputForm;
