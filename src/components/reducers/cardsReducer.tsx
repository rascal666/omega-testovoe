import { Dispatch} from 'redux';
import uuid from 'react-uuid';

const actionName = {
    ADD_CARD: 'ADD_CARD',
    DELETE_CARD: 'DELETE_CARD'
}

type MyDispatch = Dispatch
type MyAction = {
    type: string;
    card: {
        title: string,
        price: number,
        img: string,
        description: string
    }
    id: string
};


const initialState = {
    cards: [ {
        id: uuid(),
        title:'porsh',
        price:'1550',
        img: 'https://www.free-wallpapers.su/data/media/10657/big/car34633.jpg',
        description:'descriptiofffn',
    },
    ],
}

export default (state = initialState, action:MyAction) => {
    switch (action.type){
        case actionName.ADD_CARD : {
            return {
                ...state,
                cards: [...state.cards, {
                    id:uuid(),
                    title:action.card.title,
                    price:action.card.price,
                    img: action.card.img,
                    description: action.card.description
                }]
            }
        }
        case actionName.DELETE_CARD : {
            return {
                ...state,
                cards: state.cards.filter((card) => card.id !== action.id)
            }
        }
        default : return state
    }
}

export const addCard = (card: {}) => {
    return(dispatch: MyDispatch)  => {
        return dispatch({type: actionName.ADD_CARD, card})
    }
}

export const deleteCard = (id: string) => {
    return(dispatch: MyDispatch)  => {
        return dispatch({type: actionName.DELETE_CARD, id})
    }
}