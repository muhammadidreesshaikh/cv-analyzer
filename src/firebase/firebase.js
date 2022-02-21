import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

var firebaseConfig = {
    apiKey: "AIzaSyA30wRX4L3h68gAxNsY_tyyMSfYyNOlhZE",
    authDomain: "cv-analyzer-9562b.firebaseapp.com",
    projectId: "cv-analyzer-9562b",
    storageBucket: "cv-analyzer-9562b.appspot.com",
    messagingSenderId: "1006871375796",
    appId: "1:1006871375796:web:5b3211a3e3701aa2620ce1",
    measurementId: "G-4RFV5419S7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//analytics is optional for this tutoral 
// firebase.analytics();

const storage = firebase.storage();

export {
    storage, firebase as default
}