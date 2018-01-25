import { INITIALIZE, FETCH, PUSH } from '../constants/constants';

export default function (state = [], action) {
    switch (action.type) {
        case INITIALIZE:
            console.log('REDUCER INITIALIZE');
            console.log(action.payload);
            return [...action.payload, ...state];
        case PUSH:
            console.log('REDUCER PUSH');
            console.log(action.payload);
            if (action.payload === 'DUPLICATE') {
                return state;
            } else {
                return [action.payload, ...state];
            }
        case FETCH:
            console.log('REDUCER FETCH');
            return [...action.payload, ...state];
        default:
            return state;
    }
}