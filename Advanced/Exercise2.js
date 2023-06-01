let people = ["Greg", "Mary", "Devon", "James"];

// Remove "Greg" from the array
people.shift();

// Add "Matt" to the front of the array
people.unshift("Matt");

// Remove "James" from the array
let index = people.indexOf("James");
if (index !== -1) {
  people.splice(index, 1);
}

// Add your name to the end of the array
people.push("Sophia");

// Make a copy of the array using slice
let copy = people.slice(1, 3);

// Find the index of "Mary"
let maryIndex = people.indexOf("Mary");

// Find the index of "Foo"
let fooIndex = people.indexOf("Foo");

// Redefine the people variable with the original values
people = ["Greg", "Mary", "Devon", "James"];

// Remove "Devon" from the array and add "Elizabeth" and "Anna"
index = people.indexOf("Devon");
if (index !== -1) {
  people.splice(index, 1, "Elizabeth", "Anna");
}

console.log(people);
