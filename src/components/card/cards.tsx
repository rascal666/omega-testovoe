import React, {FC} from 'react';
import Card from "./card";
import '../../styles/carsd.scss'
import {useSelector} from "react-redux";

type CardProps = {
    id: string,
    img: string,
    title: string,
    price: string,
    description: string,
}

const Cards:FC = () => {
    const cards = useSelector((store:any) => store.cards.cards)
    return (
        <div className='cards'>
            {
                cards.map((card: CardProps) => {
                    return (
                        <Card key={card.id} id={card.id} img={card.img} title={card.title} price={card.price} description={card.description}/>
                    )
                })
            }
        </div>
    );
};

export default Cards;