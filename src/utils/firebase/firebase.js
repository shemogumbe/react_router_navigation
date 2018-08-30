import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCiFb2iVvnw-624V0dJupc4tPNocd97XUk",
    authDomain: "andelamrm.firebaseapp.com",
    databaseURL:"https://andelamrm.firebaseio.com",
    projectId: "andelamrm",
    storageBucket: "andelamrm.appspot.com",
    messagingSenderId: "753057157806"
};
  
firebase.initializeApp(config);

const database = firebase.database()

database.ref().set({
    name: "Shem Ogumbe",
    age: 25,
    job: {
        title: "Technical Team Lead",
        company: "Andela"
    },
    married: false
}).then(() => {
    console.log("Data saved succesfully")
}).catch((e) => {
    console.log("An error occured", +e)
})

database.ref('married').update({
    firstWife: "Joy",
    secondWife: "Ruth"
}).then(() => {
    console.log("Marital status updated")
}).catch((e) => {
    console.log("Error in editting marital status", +e)
})

//update db to add location
database.ref('location').set({
  city: "Nairobi",
  country: "Kenya"
})

//delete a ref
database.ref('netWealth').remove();

//update a ref
database.ref().update({
    name: "Shem Owaga",
    age: 28
})

//updare nested objects
database.ref('job/title').set(
     "Senior Developer");

//update to remove
database.ref('married/secondWife').set(null);

//fetch data
database.ref()
 .once('value')
.then((snapshot) => {
    console.log(snapshot.val())
}).catch((e) => {
    console.log("an error occured", + e)
})