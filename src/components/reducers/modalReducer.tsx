import { Dispatch} from 'redux';

type MyDispatch = Dispatch
type MyAction = {
    type: string;
    payload: any;
    modalHandler: boolean,
    param: string
};


const initialState = {
    modalHandler: false,
    param: ''

};

export default (state = initialState, action:MyAction) => {
    switch (action.type){
        case 'IS_MODAL' : {
            return {
                ...state,
                modalHandler: !state.modalHandler,
                param: action.param

            }

        }
        default : return state
    }
}

export const isModal = (param: string) => {
    return(dispatch: MyDispatch)  => {
        return dispatch({type: 'IS_MODAL', param})
    }
}
