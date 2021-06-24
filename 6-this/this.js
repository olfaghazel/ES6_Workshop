// this
const person = {
  talk() {
    console.log(this);
  },
};
console.log(person.talk());
// ====> return objet courant (person)

//  this in function standalone
const person = {
  talk() {
    setTimeout(function () {
      console.log(this);
    }, 100);
  },
};
console.log(person.talk());
// =====> return  window objet

//  add let x=this
const person = {
  talk() {
    let x = this;
    setTimeout(function () {
      console.log(x);
    }, 100);
  },
};
console.log(person.talk());
// ====>return objet  person

// with arrow function
const person = {
  talk() {
    let x = this;
    setTimeout(function () {
      console.log(x);
    }, 100);
  },
};
console.log(person.talk());
