import firebase from '../config/firebase';
import {
    PUSH_TOPIC,
    PUSH_TWEET,
    FETCH,
    INITIALIZE
} from '../constants/constants';

/* OPTIMIZE THIS LATER */
export const pushTopic = (topic) => {
    return (dispatch) => {
        firebase.database().ref('Topics').once("value").then((snapShot) => {
            const action = {
                type: PUSH_TOPIC
            }
            let found = false;
            snapShot.forEach((childSnapshot) => {
                let child = childSnapshot.val()
                if (child.Topic === topic) {
                    found = true;
                }
            });

            if (found) {
                action.payload = 'DUPLICATE';
                dispatch(action);
            } else {
                action.payload = {
                    Topic: topic
                }
                const key = firebase.database().ref('Topics').push({ Topic: topic }).key;
                /*firebase.database().ref('Topics').push({ Topic: topic }).then((snapShot) => {
                    action.payload.key = snapShot.key;
                    dispatch(action);
                })*/
                action.payload.key = key;
                dispatch(action);
            }
        });
    };
};

/* OPTIMIZE THIS LATER */
export const pushTweet = (id, topicKey) => {
    return (dispatch) => {
        console.log(topicKey);
        firebase.database().ref('Topics').child(topicKey).once("value", (snapShot) => {
            snapShot.ref.update({
                ID: id
            })
        });

        dispatch({
            type: PUSH_TWEET,
            payload: {
                ID: id,
                Topic: topicKey
            }
        });
    }
}


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