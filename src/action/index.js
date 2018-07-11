import {ADD_NUMBER, COUNT_NUMBER, RESET_NUMBER, CALC_NUMBER} from '../constant/index'

export const addNumber = () => ({
    type: ADD_NUMBER
});

export const countNumber = () => ({
    type: COUNT_NUMBER
});

export const resetNumber = () => ({
    type: RESET_NUMBER
});

export const calcNumber = (optNum) => ({
    type: CALC_NUMBER,
    optNum
});