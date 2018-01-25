import { CREATE_TOPIC } from '../constants/constants';

export default function (state = [], action) {
    switch (action.type) {
        case CREATE_TOPIC:
            return [action.payload, ...state];
        default:
            return state;
    }
}