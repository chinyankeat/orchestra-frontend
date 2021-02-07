import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCY6hMff1eq3znpPk48MvuZQs2AhKZjmpM",
    authDomain: "orchestra-v1.firebaseapp.com",
    databaseURL: "https://orchestra-v1-default-rtdb.firebaseio.com/",
    projectId: "orchestra-v1",
    storageBucket: "orchestra-v1.appspot.com",
    messagingSenderId: "1058905700155",
    appId: "1:1058905700155:web:84b5aa70cecd767db8291e",
    measurementId: "G-87S3RZ72WD"
};
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}
const fire = firebase;
export default fire;
