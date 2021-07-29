import firebase from 'firebase/app';

import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD-ElEGNTr8sojdasJBWNzMmFkDHXOCDN8",
    authDomain: "mintwitter-d8003.firebaseapp.com",
    projectId: "mintwitter-d8003",
    storageBucket: "mintwitter-d8003.appspot.com",
    messagingSenderId: "551173598144",
    appId: "1:551173598144:web:0e96c6f0e39e8929dab625"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
