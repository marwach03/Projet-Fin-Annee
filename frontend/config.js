import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseconfig = {
    apiKey: "AIzaSyAafelYUV0ZrXzB6EyShVoF8KWEarOxAiA",
    authDomain: "auth-220c4.firebaseapp.com",
    projectId: "auth-220c4",
    storageBucket: "auth-220c4.appspot.com",
    messagingSenderId: "447053514847",
    appId: "1:447053514847:web:2f1e78ad83bf57c291f3ea",
    measurementId: "G-FVBP97JY2F"
}

if (!firebase.apps.length){
    firebase.initializeApp(firebaseconfig);
} 

export{firebase};