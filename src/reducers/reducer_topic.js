import { FETCH_ALL } from '../constants/constants';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_ALL:
            console.log('REDUCER FETCH_ALL');
            console.log(action.payload);
            return [...action.payload];
        default:
            return state;
    }
}