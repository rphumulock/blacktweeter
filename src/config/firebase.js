import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBnCYCmxGGkMF9efeH92Bx8RAmxdItCSGw",
    authDomain: "test-bt-77ace.firebaseapp.com",
    databaseURL: "https://test-bt-77ace.firebaseio.com",
    projectId: "test-bt-77ace",
    storageBucket: "test-bt-77ace.appspot.com",
    messagingSenderId: "583763849450"
};
firebase.initializeApp(config);

export default firebase;