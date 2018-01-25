import firebase from '../config/firebase';
import {
    PUSH,
    FETCH,
    INITIALIZE
} from '../constants/constants';

export const initializeTweets = () => {
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

export const createTopic = (topic) => {
    return {
        type: PUSH,
        payload: topic
    };
};

export const saveTopic = (id, topic) => {
    return (dispatch) => {
        firebase.database().ref('Topics').push({
            Topic: topic,
            ID: id
        });
    };
};


/*export const fetchTweets = () => {
    return (dispatch) => {
        firebase.database().ref('tweets').on('child_added', (snapshot) => {
            dispatch({
                type: FETCH,
                payload: snapshot.val()
            });
        });
    };
};*/