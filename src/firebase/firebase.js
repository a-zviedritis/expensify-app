import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((cSnapshot) => {
//       expenses.push({
//         id: cSnapshot.key,
//         ...cSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses').push({
//   description: 'Exp4',
//   note: 'Mobile',
//   amount: 1000,
//   createdAt: 0
// });

// database.ref('notes').push({
//   title: 'ToDo',
//   body: 'Run'
// });

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// setTimeout(() => {
//   database.ref('job/title').set('Team Lead');
// }, 3500);

// database.ref('location')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();

//     console.log(val);
//   })
//   .catch((error) => {
//     console.log('Error: ', error);
//   })
//   ;

// database.ref().set({
//   name: 'John Doe',
//   age: 10,
//   stressLevel: 1,
//   job: {
//     title: 'Engineer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Manila',
//     country: 'USA'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((error) => {
//   console.log('Oops: ', error);
// });

// database.ref('isSingle').remove().then(() => {
//   console.log('Data removed');
// }).catch((error) => {
//   console.log('Oops: ', error);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle',
//   isSingle: null
// }).then(() => {
//   console.log('Data updated');
// }).catch((error) => {
//   console.log('Oops: ', error);
// });