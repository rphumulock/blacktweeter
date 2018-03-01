import firebase from '../config/firebase';
import {
    PUSH_TOPIC,
    PUSH_TWEET,
    FETCH_ALL
} from '../constants/constants';

/* OPTIMIZE THIS LATER 
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
                action.payload.key = key;
                dispatch(action);
            }
        });
    };
};*/

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
export const fetchAll = () => {
    return (dispatch) => {
        firebase.database().ref('Topics').on('value', (snapshot) => {
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

/*                let current = childSnapshot.val();
                let item = {
                    Topic: current.Topic,
                    Key: childSnapshot.key,
                    Tweets: []
                }

                if (current.Tweets) {
                    Object.keys(current.Tweets).map(function (key) {
                        firebase.database().ref('Tweets').child(key).once('value', (tweet) => {
                            item.Tweets.push(tweet.val());
                        });
                    });
                }
                returnArr.push(item);*/