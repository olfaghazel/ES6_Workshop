//
let introduction = ['Hello', 'I', 'am', 'Sarah'];
let greeting = introduction[0];
let name = introduction[3];

console.log(greeting); //"Hello"
console.log(name); //"Sarah"

// Declaring Variables before Assignment

let introduction = ['Hello', 'I', 'am', 'Sarah'];
let [greeting, pronoun] = introduction;

console.log(greeting); //"Hello"
console.log(pronoun); //"I"

// Skipping Items in an Array

let [greeting, , , name] = ['Hello', 'I', 'am', 'Sarah'];

console.log(greeting); //"Hello"
console.log(name); //"Sarah"

//
let [, pronoun, , name] = ['Hello', 'I', 'am', 'Sarah'];

console.log(pronoun); //"I"
console.log(name); //"Sarah"

// ------------
let person = { name: 'Sarah', country: 'Nigeria', job: 'Developer' };

let name = person.name;
let country = person.country;
let job = person.job;

console.log(name); //"Sarah"
console.log(country); //"Nigeria"
console.log(job); //Developer"

// Basic Object Destructuring

let person = { name: 'Sarah', country: 'Nigeria', job: 'Developer' };

let { name, country, job } = person;

console.log(name); //"Sarah"
console.log(country); //"Nigeria"
console.log(job); //Developer"

//
let { name, country, job } = {
  name: 'Sarah',
  country: 'Nigeria',
  job: 'Developer',
};

console.log(name); //"Sarah"
console.log(country); //"Nigeria"
console.log(job); //Developer"

// destructuring object

// without destructuring
let user = {
  name: 'mohamed',
  age: 25,
  address: {
    city: 'cité el khadhra',
    cp: 1400,
  },
};
let a = (user) => {
  return `my name is ${user.name}, and i'm ${user.age} and i live in ${user.address.city} `;
};
console.log(a(user));

// destructuring user
let user = {
  name: 'mohamed',
  age: 25,
  address: {
    city: 'cité el khadhra',
    cp: 1400,
  },
};
let a = ({ name, age, address: { city, cp } }) => {
  return `my name is ${name}, and i'm ${age} and i live in ${city}: ${cp} `;
};
console.log(a(user));

// destructuring array
let tab = [1, 2, 5];
const [first, second, third] = tab;
console.log(first);
