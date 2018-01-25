import { INITIALIZE, FETCH, PUSH_TOPIC, PUSH_TWEET } from '../constants/constants';

export default function (state = [], action) {
    switch (action.type) {
        case INITIALIZE:
            console.log('REDUCER INITIALIZE');
            console.log(action.payload);
            return [...action.payload, ...state];
        case PUSH_TOPIC:
            console.log('REDUCER PUSH_TOPIC');
            console.log(action.payload);
            if (action.payload === 'DUPLICATE') {
                return state;
            } else {
                return [action.payload, ...state];
            }
        case PUSH_TWEET:
            console.log('REDUCER PUSH_TWEET');
            console.log(action.payload);
            return state;
        case FETCH:
            console.log('REDUCER FETCH');
            return [...action.payload, ...state];
        default:
            return state;
    }
}