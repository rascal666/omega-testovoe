import React, {ChangeEvent} from 'react';
import '../../styles/input.scss'

type propsType = {
    value: string | number,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    placeholder: string,
    type: string
}
const Input = ({value, onChange, placeholder, type} : propsType) => {
    return (
        <input value={value} onChange={onChange} placeholder={placeholder} type={type} className='input'/>
    );
};

export default Input;