import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBYmldZqvdU35AZ-w9cpTaH0DR9cUuvIW0",
  authDomain: "clone-7ca61.firebaseapp.com",
  projectId: "clone-7ca61",
  storageBucket: "clone-7ca61.appspot.com",
  messagingSenderId: "618967637072",
  appId: "1:618967637072:web:af30587f68abfe50b40555",
  measurementId: "G-4FDVK6H3BB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); // use firebase database
const auth = firebase.auth();

export { db, auth };
