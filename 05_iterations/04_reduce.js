const arr = [10,21,45,44,99]

const sum = arr.reduce((accumulator, element)=> accumulator+element,0)

console.log(sum)


const words = ["hello", "world"];
const letters = words.flatMap(word => word.split('')); // letters is ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"]
console.log(letters)