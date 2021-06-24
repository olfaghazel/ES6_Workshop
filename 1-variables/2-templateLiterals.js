let str = "mohamed";
let age = 26;
let address = {
  city: "cité el khadhra",
  cp: 1200,
};
let string =
  "my name is " +
  str +
  "and my age is " +
  age +
  "and i live in " +
  address.city;

console.log(string);
// use template literals
let string1 = `my name is ${str}and my age is ${age} and i live in ${address.city}`;
console.log(string1);
