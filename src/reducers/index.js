import {combineReducers} from 'redux'
import {ADD_NUMBER, COUNT_NUMBER, RESET_NUMBER, CALC_NUMBER} from '../constant/index'

let initialState = {number: 0};
const Counter = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NUMBER:
            return {number: state.number + 1};
        case COUNT_NUMBER:
            return {number: state.number - 1};
        case RESET_NUMBER:
            return {number: 0};
        case CALC_NUMBER:
            return {number: state.number + parseInt(action.optNum,10)};
        default:
            return state
    }
};

let AppReducers = combineReducers({Counter});

export default AppReducers;