
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyAJmDzWhV9z366Feg_RNttNPcTL8XUTK3I",
  authDomain: "test-todo-6a85f.firebaseapp.com",
  projectId: "test-todo-6a85f",
  storageBucket: "test-todo-6a85f.appspot.com",
  messagingSenderId: "606844471847",
  appId: "1:606844471847:web:f03536f01a833dac411c02",
  measurementId: "G-3B774BR542"
};


const app = initializeApp(firebaseConfig);
var db = getDatabase();










// import "firebase/compat/app";
// import "firebase/compat/auth";


// Import the functions you need from the SDKs you need




// const firebaseConfig = {
//     apiKey: "AIzaSyAJmDzWhV9z366Feg_RNttNPcTL8XUTK3I",
//     authDomain: "test-todo-6a85f.firebaseapp.com",
//     projectId: "test-todo-6a85f",
//     storageBucket: "test-todo-6a85f.appspot.com",
//     messagingSenderId: "606844471847",
//     appId: "1:606844471847:web:f03536f01a833dac411c02",
//     measurementId: "G-3B774BR542"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
//   var db = getFirestore(app);