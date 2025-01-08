//Immediately Invoked Function Expression

// ways to write iffes

//1. anonymous function

(() => {
    console.log(num)
})(num=0); //semicolon is important here. This allows us to execute another IFFE function within same JS.

//2. with function keyword

(function (){
    console.log(num)
})(num=0);

//3. with function. helpful in recursion
(function recursion (){
    num++;
    console.log(num);
    return num !== 5 ? recursion(num) : console.log("finished")
})(num);

// console.log(recursion) // error recursion not defined.

//Reason for using IFFE
//1. doesnt populate global namespace

(function () {
    var privateVariable = "I am private!";
    console.log(privateVariable); // Output: I am private!
  })();
  
  console.log(typeof privateVariable); // Output: undefined (variable is not accessible globally)


//2. Initialization Code

const app = (function () {
    const appName = "My App";
  
    return {
      getName: function () {
        return appName;
      },
    };
  })();
  
  console.log(app.getName()); // Output: My App

  
//3. Avoiding conflicts in global scope 

var counter = 10;

(function () {
  var counter = 5; // This counter is scoped to the IIFE
  console.log(counter); // Output: 5
})();

console.log(counter); // Output: 10 (global scope counter remains unchanged)



