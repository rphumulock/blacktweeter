import { FETCH_TWEETS } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_TWEETS:
            return [action.payload, ...state];
        default:
            return state;
    }
}