import {combineReducers} from "redux";

import cards from "./cardsReducer";
import modal from "./modalReducer";



const rootReducer = combineReducers({cards , modal})

export default rootReducer