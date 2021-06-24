// object
const user = {
  name: "jhon",
  age: 25,
};
let user1 = { ...user, id: 5, name: "mohamed" };
console.log(user1);

// array

const tab = [1, 3, 6, 9];
let tab1 = [...tab, 56, 8];
console.log(tab1);

const tab = [1, 3, 6, 9];
const t = [9, 6, 3, 5];
let tab1 = [...tab, ...t];
console.log(tab1);

const users = [{ name: "mohamed" }, { name: "salah" }];
const tt = [...users, { name: "hejer" }];
console.log(tt);

const users = [{ name: "mohamed" }, { name: "salah" }];
const tt = [...users, { name: "hejer" }];
const u = users.map((el, i) => {
  return { ...el, age: i };
});
console.log(u);
