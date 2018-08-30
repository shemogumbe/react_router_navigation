import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCiFb2iVvnw-624V0dJupc4tPNocd97XUk",
    authDomain: "andelamrm.firebaseapp.com",
    databaseURL: "https://andelamrm.firebaseio.com",
    projectId: "andelamrm",
    storageBucket: "andelamrm.appspot.com",
    messagingSenderId: "753057157806"
};
  
firebase.initializeApp(config);

const database = firebase.database()

database.ref().set({
    name: "Shem Ogumbe"
}).then(() => {
    console.log("Data saved succesfully")
}).catch((e) => {
    console.log("An error occured", +e)
})