import React, {FC, ReactNode, MouseEventHandler} from 'react';
import '../../styles/button.scss'

type buttonProps= {
    onClick?: () => void,
    children: ReactNode,
    className?:string
}

const Button = ({onClick, children, className}: buttonProps) => {
    return (
        <button className={'button ' + className } onClick={onClick}> {children} </button>
    );
};

export default Button;