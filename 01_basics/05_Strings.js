const fname = "Aniket"
const lname = "Sharma"

console.log("my name is "+ fname + " " + lname)
console.log(fname.length)
//below is cleaner way to write - this is known as string interpolation 
console.log(`My Name is ${fname} ${lname}`)

//String gives us various methods that we can apply on a string. ex: length
const collegeName = new String('tesla');

console.log(collegeName.length)

console.log(collegeName.toUpperCase())

console.log(collegeName.indexOf("sa"))



const car = new String('tesla-car');

const newcar = car.substring(0,car.indexOf('-'))

console.log(newcar)


console.log(newcar.slice(-2, 5))


const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"
