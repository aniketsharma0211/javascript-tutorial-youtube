// based on how data is stored in memory and how it is accessed, there are 2 types of datatypes - 

//primitive(call by value)

//7 types : String, Number, Boolean, null, undefined, Symbol(unique value), BigInt




/* 
Statically typed languages and dynamically typed languages differ in when and how they enforce type rules during program execution.

Statically Typed Languages
Type Checking: Performed at compile-time.
Type Declaration: You must explicitly declare variable types before using them (in many cases).
Examples: C, C++, Java, Go, Swift.
Advantages:
Fewer runtime errors: Type errors are caught during compilation, leading to more robust code.
Performance: Code is generally faster since types are known at compile time, enabling better optimizations.
Better tooling: IDEs provide more precise autocomplete and error checking due to explicit type definitions.
Disadvantages:
Verbose: Requires more code due to explicit type declarations.
Inflexibility: Refactoring can be harder as type constraints may need adjustments in multiple places.
Dynamically Typed Languages
Type Checking: Performed at runtime.
Type Declaration: Variable types are inferred at runtime; no explicit type declarations are needed.
Examples: Python, JavaScript, Ruby, PHP.
Advantages:
Flexibility: Easier to write and modify code due to no need for type declarations.
Rapid development: Code is often shorter and quicker to write.
Disadvantages:
Runtime errors: Type-related issues might only appear during program execution.
Slower performance: Additional overhead for type checking at runtime.
Limited tooling: IDEs and editors might offer less accurate suggestions and checks.
*/


// const testsymbol = Symbol('123')
// const testsymbol2 = Symbol('123')

// console.log(testsymbol === testsymbol2) //returns false, we get 2 different unique objects here.

// //if we want to explicitly mention that a number is bigint

// const bigintegertest = 938409324809328409328402n
// console.log(bigintegertest) //javascript converts the number to bigint.
//console.log(typeof bigintegertest)



//non-primitive(reference type)
//Arrays, Objects, Functions

//Arrays
const heros = ["ironman","batman","superman"]
console.log(heros)
console.log(typeof heros)

// objects
let obj = {
    name: "Aniket",
    age: "36"
}
console.log(typeof obj)

const myfunction = function(){
    console.log("Hello World");
}
console.log(typeof myfunction)