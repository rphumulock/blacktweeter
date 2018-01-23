import firebase from '../config/firebase';
import {
    CREATE_TOPIC,
    FETCH_TWEETS
} from '../constants/constants';

export const initializeTweets = () => {
    return (dispatch) => {
        firebase.database().ref('tweets').once('value', (snapshot) => {
            console.log('INITIALIZE')
            dispatch({
                type: FETCH_TWEETS,
                payload: snapshot.val()
            });
        });
    };
};

export const fetchTweets = () => {
    return (dispatch) => {
        firebase.database().ref('tweets').on('child_added', (snapshot) => {
            console.log("FETCH_TWEETS");
            dispatch({
                type: FETCH_TWEETS,
                payload: snapshot.val()
            });
        });
    };
};

export const createTopic = (topic) => {
    console.log("CREATE_TOPIC")
    return {
        type: CREATE_TOPIC,
        payload: topic
    };
};

export const pushTopic = (id, topic) => {
    return (dispatch) => {
        console.log("PUSH_TOPIC")
        firebase.database().ref('Topics').push({
            id: id,
            topic: topic
        });
    };
};




