/*
// Object destructuring
*/

// const person = {
//   name: 'David',
//   age: 27,
//   location: {
//     city: 'New Jersey',
//     temp: 89,
//   },
// };

// const { name: firstname = 'Anonymous', age } = person;
// console.log(`${firstname} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

/*
// Array destructuring
*/

// const address = ['1 Executive Drive', 'Fort Lee', 'New Jersey', '07024'];

// const [street, city, state, zip] = address; // return all items of array using variables
// const [street, city, state] = address; // returns array item 0, 1, 2
// const [, city, state] = address; // returns array item 1, 2
// const [, , state] = address; // returns array item  2

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} cost ${mediumPrice}`);
