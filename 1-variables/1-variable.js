// let & const
// const ==> constant
// let ==> to reasign a variable
function boucle() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}
console.log(boucle());

// remplacer var par let
function boucle() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}
console.log(boucle());
