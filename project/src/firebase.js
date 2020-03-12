import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details
    apiKey: "AIzaSyDSJNbwPALmPNEHvQc1YrKLkXeIP79umXo",
    authDomain: "bt3103-5dec9.firebaseapp.com",
    databaseURL: "https://bt3103-5dec9.firebaseio.com",
    projectId: "bt3103-5dec9",
    storageBucket: "bt3103-5dec9.appspot.com",
    messagingSenderId: "280388222924",
    appId: "1:280388222924:web:92f1098ae71096e0f5a769",
    measurementId: "G-G048ZWEG16"
  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;