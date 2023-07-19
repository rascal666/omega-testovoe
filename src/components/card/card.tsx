import React from 'react';
import '../../styles/card.scss'
import {SlBasketLoaded} from "react-icons/sl";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {deleteCard} from "../reducers/cardsReducer";
import {useDispatch} from "react-redux";
import {isModal} from "../reducers/modalReducer";

type CardProps = {
    id: string,
    img: string,
    title: string,
    price: string,
    description: string,
}


const Card = ({id, img, title,price, description}: CardProps) => {
    const dispatch = useDispatch()

    return (
        <div className='card'>
            <div className='card__img'>
                <img src={img} alt=""/>
            </div>
            <div className='card__text'>
                <p className='card__title'>{title}</p>
                <p className='card__price'>{price}</p>
                <p className='card__description'>{description}</p>
            </div>
            <div className='card__options'>
                <div onClick={() => {isModal('pay')(dispatch)} } className='card__iconWrapper'><SlBasketLoaded className='card__icon'/></div>
                <div onClick={()=> cardDelete(id)} className='card__iconWrapper'><AiOutlineCloseCircle className='card__icon'/></div>
            </div>
        </div>
    );

    function cardDelete(id: string) {
        deleteCard(id)(dispatch)
    }

    function cardPay() {

    }
};




export default Card;