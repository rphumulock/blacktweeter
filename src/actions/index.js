import firebase from '../config/firebase';
import {
    PUSH,
    FETCH,
    INITIALIZE
} from '../constants/constants';

/* FETCHES ALL ITEMS STORED IN DATABASE */
export const initialize = () => {
    return (dispatch) => {
        firebase.database().ref('Topics').once('value', (snapshot) => {
            let returnArr = [];
            snapshot.forEach((childSnapshot) => {
                let item = childSnapshot.val();
                item.key = childSnapshot.key;
                returnArr.push(item);
            })
            dispatch({
                type: INITIALIZE,
                payload: returnArr
            });
        });
    };
};

/* OPTIMIZE THIS LATER */
export const push = (topic) => {
    return (dispatch) => {
        firebase.database().ref('Topics').once("value").then((snapshot) => {
            const action = {
                type: PUSH
            }
            let found = false;
            snapshot.forEach((childSnapshot) => {
                let child = childSnapshot.val()
                if (child.Topic === topic) {
                    found = true;
                }
            });

            if (found) {
                action.payload = 'DUPLICATE';
            } else {
                action.payload = {
                    Topic: topic
                }
                firebase.database().ref('Topics').push({ Topic: topic });
            }
            dispatch(action);
        });
    };
};



/* 

  if (check) {
                console.log('1');
                action.payload = 'Duplicate';
            } else {
                console.log('2');
                action.payload = {
                    Topic: topic
                }
                firebase.database().ref('Topics').push({ Topic: topic });
            }
   const action = {
                type: PUSH
            };
            let check = false;
   console.log('Key: ' + childSnapshot.key);
                if (childSnapshot.Topic === topic) {
                    action.type = PUSH;
                    action.payload = 'Duplicate';
                } else {
                    const object = {
                        Topic: topic
                    }
                    firebase.database().ref('Topics').push(object);
                    action.type = PUSH;
                    action.payload = object;
                }


PUSHES ITEM TO DATABASE 
export const push = (id, topic) => {
    return (dispatch) => {
        const object = {
            Topic: topic,
            ID: id
        }
        firebase.database().ref('Topics').push(object);
        dispatch({
            type: PUSH,
            payload: object
        });
    };
};*/