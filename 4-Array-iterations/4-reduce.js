let numbers = [1, 2, 3, 5];

let x = numbers.reduce((acc, current) => acc - current, 0);
console.log(x);
//
let users = [{ name: "mohamed" }, { name: "ali" }, { name: "salah" }];

let x = users.reduce((acc, current) => acc + current.name, "");
console.log(x);
