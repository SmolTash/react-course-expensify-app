import  * as firebase from 'firebase';
import { setTimeout } from 'timers';

// Initialize Firebase
const  config = {
    apiKey: process.env.FIREBASE_API_KEY, 
    authDomain:  process.env.FIREBASE_AUTH_DOMAIN, 
    databaseURL:  process.env.FIREBASE_DATABASE_URL, 
    projectId:  process.env.FIREBASE_PROJECT_ID, 
    storageBucket:  process.env.FIREBASE_STORAGE_BUCKET, 
    messagingSenderId:  process.env.FIREBASE_MESSAGING_SENDER_ID, 
};

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default};

// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses')
// .on('value' , (snapshot) => {
//     const expenses = [];
 
//     snapshot.forEach ((childSnapshot) =>{
//      expenses.push({
//          id: childSnapshot.key,
//          ... childSnapshot.val()
//      })
//     });
//     console.log(expenses);
//  });


// database.ref('expenses')
// .once('value')
// .then ((snapshot) => {
//    const expenses = [];

//    snapshot.forEach ((childSnapshot) =>{
//     expenses.push({
//         id: childSnapshot.key,
//         ... childSnapshot.val()
//     })
//    });
//    console.log(expenses);
// });


// database.ref('expenses').push({
//    discription: 'd1',
//    note: 'n1',
//    amount:20.33,
//    createAt: 5000
// });


// database.ref('notes').push({
//     title: 'course',
//     body: 'react.js'
// })

// database.ref('notes').set(firebaseNotes);

// const onValueChange = database.ref().on('value', (snapshot) =>{
//     const user = snapshot.val();
//     console.log(user.name + ' is a ' + user.job.title + ' at ' + user.location.city);
// });

// database.ref('location')
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }).catch((e) => {
//     console.log('Error fething' , e);
// });


// database.ref().set({
//     name: 'Smolka Tash',
//     age: 39,
//     stressLefel: 6,
//     job: {
//         title: 'SD',
//         company: 'Google'
//      },
//     location: {
//         city: 'ZV',
//         country: 'Ukraine'
//     }    
// }).then (() =>{
//     console.log('Data is saved!')
// }).catch((e) => {
//     console.log('This failed' , e);
// });
 
// database.ref().update({
//     stressLefel: 9,
//     'job/company' : 'AAA',
//     'location/city' : 'Kiev'
// }).then (() =>{
//     console.log('updated!')
// }).catch((e) => {
//     console.log('Updating error' , e);
// });



// database.ref().remove()
// .then(() =>{
//   console.log("Remove succeeded.")
// })
// .catch((error) => {
//   console.log("Remove failed: " + error.message)
// });

