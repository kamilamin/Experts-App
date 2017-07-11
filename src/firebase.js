import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyClI-zWvexeRrNE76wqJ4_TGy5Rb_-INnE",
    authDomain: "expert-dd1ed.firebaseapp.com",
    databaseURL: "https://expert-dd1ed.firebaseio.com",
    projectId: "expert-dd1ed",
    storageBucket: "expert-dd1ed.appspot.com",
    messagingSenderId: "716556616097"
};

export const firebaseApp = firebase.initializeApp(config);
