 import  firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCf0vrG9alXLQMAVz1KsWG03xLPSKi6Rko",
  authDomain: "attt-35e1e.firebaseapp.com",
  databaseURL: "https://attt-35e1e-default-rtdb.firebaseio.com",
  projectId: "attt-35e1e",
  storageBucket: "attt-35e1e.appspot.com",
  messagingSenderId: "432680780257",
  appId: "1:432680780257:web:e07ea984e1154524a592a0"
};
//initialize your database
firebase.initializeApp(firebaseConfig)
  export default firebase.database()
 

  