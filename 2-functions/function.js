function add(x, y) {
  return x + y;
}

console.log(add(1, 2));

//arrow function: other syntax

const add1 = (x, y) => {
  return x + y;
};
//    on peut simplifier lorsqu'on une seule traitement
const add1 = (x, y) => x + y;
console.log(add1(1, 2));
