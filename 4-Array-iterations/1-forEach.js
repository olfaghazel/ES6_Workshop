// forEach : comme for :
let names = ["mohamed", "ali", "salah"];
let capital = [];
let x = names.forEach((el) => {
  let a = el.toUpperCase();
  capital.push(a);
});
console.log(capital);
