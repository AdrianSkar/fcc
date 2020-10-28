// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/remove-whitespace-from-start-and-end

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ''); // Change this line

// let wsRegex = /\s+(.*[^\s])\s+/; // Change this line
// let result = hello.replace(wsRegex, '$1'); // Change this line

console.log(result);