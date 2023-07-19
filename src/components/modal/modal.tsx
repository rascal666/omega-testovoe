import React from 'react';
import CardAdd from "../card/cardAdd";
import '../../styles/modal.scss'
import {isModal} from "../reducers/modalReducer";
import {useDispatch} from "react-redux";
import CardPay from "../card/cardPay";
import {MdClose} from "react-icons/md";

type modalProps= {
    params:string
}

const Modal = ({params}: modalProps) => {
    const dispatch = useDispatch()
    return (
        <div onClick={(e)=> closeModal(e)} className='modal'>
            <div  className='modal__wrapper'>
                <div ><MdClose className='modal__close'/></div>
                {params? modalComponent(params) : null}
            </div>
        </div>
    );

    function closeModal(e: React.MouseEvent) {
        const checkClass = ['button' , 'modal', 'modal__close']
        const target = e.target as HTMLElement

        checkClass.forEach(c => {
            const element = target.classList.contains(c)

            if (element ) {
                isModal('')(dispatch)
            }
        })
    }

    function modalComponent (params:string)  {
        switch (params) {
            case 'card' : {
                return(
                    <CardAdd/>
                )
            }
            case 'pay' : {
                return(
                    <CardPay/>
                )
            }
            default: return false
        }
    }
};

export default Modal;