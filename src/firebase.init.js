import {getAuth} from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAriiML-hOIppFh96iHFkwpxSEf_l2G8lg",
  authDomain: "warehouse-manage-2f330.firebaseapp.com",
  projectId: "warehouse-manage-2f330",
  storageBucket: "warehouse-manage-2f330.appspot.com",
  messagingSenderId: "467441979111",
  appId: "1:467441979111:web:bdc7c061fb2bf13aa11c42"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;



  // apiKey:process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // appId:process.env.REACT_APP_appId