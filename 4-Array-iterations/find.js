// La méthode find() renvoie la valeur du premier élément trouvé dans le tableau qui respecte la condition donnée
let fruits = ["tomate", "apple", "kiwi"];
let x = fruits.find((el) => el.length !== 5);
console.log(x);
