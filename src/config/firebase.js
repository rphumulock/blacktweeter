import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAyWEYCv3aW4G_MJCeSaYo-zyqQ_G0obUk",
    authDomain: "test-ac93f.firebaseapp.com",
    databaseURL: "https://test-ac93f.firebaseio.com",
    projectId: "test-ac93f",
    storageBucket: "test-ac93f.appspot.com",
    messagingSenderId: "368673757404"
};
firebase.initializeApp(config);

export default firebase;
