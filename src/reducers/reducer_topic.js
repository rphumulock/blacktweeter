import { CREATE_TOPIC } from '../constants/constants';

export default function (state = [], action) {
    switch (action.type) {
        case CREATE_TOPIC:
            if (state.indexOf(action.payload) != -1) {
                return state;
            } else {
                return [action.payload, ...state];
            }
        default:
            return state;
    }
}