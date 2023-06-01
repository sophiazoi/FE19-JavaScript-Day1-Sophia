/* First Array */
var fruits = ["apple", "banana", "kiwi"];
var fruits1 = fruits.slice();
fruits1.push("orange");
console.log(fruits1.join(", "));
var fruits2 = fruits.slice();
console.log(fruits2.join(", "));

/* Second Array */
var animals = ["monkey", "horse", "dog"];
var reversedAnimals = animals.slice().reverse();
console.log(reversedAnimals.join(", "));
animals.unshift("cat");
console.log(animals.join(", "));
