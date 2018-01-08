console.log ('distructuring');

//
//Object destructuring
//

// const person = {
//     name: 'Tash',
//     age : 40,
//     location: {
//         city: 'Kyev',
//         temp: 0
//     }
// };

// const {name: firstName  = 'Anonymous', age} = person;
// // const name = person.name;
// // const age = person.age;
// console.log (`${firstName} is ${age}`);

// // if (person.location.city && person.location.temp) {
// //     console.log (`It's ${person.location.temp} in ${person.location.city}`);    
// // }

// const {city , temp:temperature} = person.location;
// if (city && temperature) {
//     console.log (`It's ${temperature} in ${city}`);    
// }

// const book = {
//     title : 'Some book',
//     author: 'Djo Black',
//     publisher : {
//         name: 'Penguin'
//     }
// };

// const {name:publisherName = 'Self-Published'} = book.publisher
// console.log (publisherName);


//
//Array destructuring
//

// const adress = [
//     '129 Street',
//     'Philadelphia',
//     'Pensilvania',
//     '78787878'
// ];

// const [street, city , state = 'NY', zip ] = adress;
// console.log (`You are in ${city} ${state}.`);


const item = ['Coffee (hot)' , '$2.00' , '$2.50' , '$2.75' ];
const [itemName, , m_price ] = item;
console.log (`A medium ${itemName} costs ${m_price}`);
