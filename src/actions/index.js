import firebase from '../config/firebase';
import { FETCH_ALL } from '../constants/constants';

/* FETCHES ALL ITEMS STORED IN DATABASE */
export const fetchAll = () => {
    return (dispatch) => {
        firebase.database().ref('Topics').orderByChild('Order').on('value', (snapshot) => {
            let returnArr = [];
            snapshot.forEach((childSnapshot) => {
                let item = childSnapshot.val();
                item.Key = childSnapshot.key;
                returnArr.push(item);
            });
            dispatch({
                type: FETCH_ALL,
                payload: returnArr
            });
        });
    };
};