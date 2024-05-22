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

class TodoFire {
    constructor(callback) {
      this.init(callback);
    }
  
    init(callback) {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                callback(null, user);
                console.log("User is authenticated:", user);
                // Autres actions à effectuer lorsque l'utilisateur est connecté
            } 
            else {
                firebase
                    .auth()
                    .signInAnonymously()
                    .catch(error => {
                    callback(error);
                    });
                console.log("User is not authenticated");
                // Autres actions à effectuer lorsque l'utilisateur est déconnecté
            }
          });
    }
  
    getLists(callback) {
        let ref = firebase
          .firestore()
          .collection('users')
          .doc(this.userId)
          .collection("lists");
      
        this.unsubscribe = ref.onSnapshot(snapshot => {
          const lists = []; 
      
          snapshot.forEach(doc => {
            lists.push({ id: doc.id, ...doc.data() }); 
          });
      
          callback(lists);
        });
    }
  
    get userId() {
      return firebase.auth().currentUser.uid;
    }
  }

export{firebase,TodoFire};