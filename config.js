import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBmMc40KUTXUocCs-rTe301VbtsYi4CNdo",
    authDomain: "project-67-4e8b3.firebaseapp.com",
    databaseURL: "https://project-67-4e8b3-default-rtdb.firebaseio.com",
    projectId: "project-67-4e8b3",
    storageBucket: "project-67-4e8b3.appspot.com",
    messagingSenderId: "880002438234",
    appId: "1:880002438234:web:b871058a14e614520ab463",
    measurementId: "G-F0XEMJ83VV"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();