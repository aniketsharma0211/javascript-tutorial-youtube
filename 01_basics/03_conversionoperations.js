// let score = 33

// console.log(typeof score);

// //console.log(typeof (score));


// let score1 = "33"

// console.log(typeof score1);


// let valueInNumber = Number(score1)

// console.log(typeof valueInNumber);


// let score2 = "33a"
// console.log(typeof score1);


// let valueInNumber1 = Number(score2)

// console.log(valueInNumber1);//returns NaN(special type). no type checks. 

// console.log(typeof valueInNumber1);// number


// //explicitly add check for NaN as it is a valid type and returns type as number.

// let score3 = null
// console.log(typeof score3); //returns object
// let valueInNumber2 = Number(score3)//converts null to 0
// console.log(valueInNumber2); //prints 0
// console.log(typeof valueInNumber2);// returns number


// let score4 = undefined
// console.log(typeof score4); //returns object
// let valueInNumber3 = Number(score4)//converts undefined to NaN
// console.log(valueInNumber3); //prints NaN
// console.log(typeof valueInNumber3);// returns number



// let score5 = true
// console.log(typeof score5); //returns boolean
// let valueInNumber4 = Number(score5)//converts boolean true to 1
// console.log(valueInNumber4); //prints 1
// console.log(typeof valueInNumber4);// returns number



// let score6 = "test"
// console.log(typeof score6); //returns string
// let valueInNumber5 = Number(score6)//converts string to NaN
// console.log(valueInNumber5); //prints NaN
// console.log(typeof valueInNumber5);// returns Number


// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);


// let isLoggedInString = "test"
// let booleanStringIsLoggedIn = Boolean(isLoggedInString)

// console.log(booleanStringIsLoggedIn);
// console.log(typeof booleanStringIsLoggedIn);//returns true

// let isLoggedInEmptyString = ""
// let booleanEmptyStringIsLoggedIn = Boolean(isLoggedInEmptyString)

// console.log(booleanEmptyStringIsLoggedIn);
// console.log(typeof booleanEmptyStringIsLoggedIn);//returns false


// let someNumber = 33
// let stringSomeNumber = String(someNumber)
// console.log(stringSomeNumber);
// console.log(typeof stringSomeNumber);// converts to string.


// If used postfix, with operator after operand (for example, x++),
//  the increment operator increments and returns the value before incrementing.

// If used prefix, with operator before operand (for example, ++x),
//  the increment operator increments and returns the value after incrementing.


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"







