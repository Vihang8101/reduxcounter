import {combineReducers} from 'redux'
// import {initialState} from "../initialState";
import {ADD_COUNTER, MIN_COUNTER, RESET_COUNTER} from "../redux/Actiontype";
const initialState = 0;
export function counterApp(state = initialState, action) {
    console.log("reducer",action);
    switch (action.type) {
        case ADD_COUNTER:
            return state + 1;
            

        case MIN_COUNTER:
            return (state > 0) ? (state - 1) : (0);
            case RESET_COUNTER :
                return state = 0
            
        default:
            return state
    }

    // return state;
}

const rootReducer = combineReducers({counterApp})

export default rootReducer;