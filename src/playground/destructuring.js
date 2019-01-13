// Object destructuring

// const person = {
//   age: 20,
//   location: {
//     city: 'Mumbai',
//     temp: 4
//   }
// };

// const { name = 'Doe', age } = person;
// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;
// console.log(`It's ${temperature} in ${city}`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

// Array destructuring

const address = [
  '1299 S Juniper Street',
  'Mumbai',
  'Illinois',
  '12345'
];

const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}.`);

const item = [
  'Coffee (hot)',
  '€2.00',
  '€2.50',
  '€2.75'
];

const [itemName, ,mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);