import { INITIALIZE, FETCH } from '../constants/constants';

export default function (state = [], action) {
    switch (action.type) {
        case INITIALIZE:
            console.log('INITIALIZE');
            console.log(action.payload);
            return [...action.payload, ...state];
        case FETCH:
            console.log('FETCH');
            return [...action.payload, ...state];
        default:
            return state;
    }
}