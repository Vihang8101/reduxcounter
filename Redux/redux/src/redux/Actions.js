import {ADD_COUNTER, MIN_COUNTER, RESET_COUNTER} from "../redux/Actiontype";

export function addCounter() {
    console.log("++++");
    return {type: ADD_COUNTER}
}

export function minCounter() {
    console.log("----");

    return {type: MIN_COUNTER}
}

export function resetCounter(counter) {
    return {type: RESET_COUNTER}
}