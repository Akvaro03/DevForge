// Import the functions you need from the SDKs you need
import { FirebaseOptions, initializeApp } from "firebase/app";
const firebaseConfig: FirebaseOptions = {
    apiKey:             "AIzaSyD5LvSDSDDBiogEBRH8lxfv_foQCd78T_o",
    authDomain:         "devforges-6fafa.firebaseapp.com",
    projectId:          "devforges-6fafa",
    storageBucket:      "devforges-6fafa.appspot.com",
    messagingSenderId:  "945757791739",
    appId:              "1:945757791739:web:c51cc9080ab15e98a9975e",
    measurementId:      "G-4LDYXR511W"
};

const app = initializeApp(firebaseConfig);

export default app;