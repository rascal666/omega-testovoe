import React, {ChangeEvent, useState} from 'react';
import '../../styles/cardAdd.scss'
import Button from "../ux-ui/button";
import {addCard} from "../reducers/cardsReducer";
import {useDispatch} from "react-redux";
import Input from "../ux-ui/input";

const CardAdd = () => {
    const dispatch = useDispatch()


    const [card, setCard] = useState({
        title: '',
        price: '',
        description: '',
        img: ''})

    return (
        <div className='cardAdd'>
            <Input value={card.title} onChange={(e) => inputChange(e, 'title')} placeholder='название' type="text" />
            <Input value={card.price} onChange={(e) => inputChange(e, 'price')} placeholder='стоимость' type="text" />
            <Input value={card.description} onChange={(e) => inputChange(e, 'description')} placeholder='описание' type="text" />
            <Input value={card.img} onChange={(e) => inputChange(e, 'img')} placeholder='картинка (нужен url)' type="text" />
            <Button onClick={()=> addCard(card)(dispatch)}  children={'добавить товар'}/>
        </div>
    );

    function inputChange(e: ChangeEvent<HTMLInputElement>, input: string) {
        setCard({...card, [input]: e.target.value})
    }
};

export default CardAdd;