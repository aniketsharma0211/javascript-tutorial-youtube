// const User = {
//     name:"aniket",
//     logincount: 10,
//     isSignedIn: true

// }

function User(name, logincount, isSignedIn){
    this.name = name;
    this.logincount = logincount;
    this.isSignedIn = isSignedIn;
    return this
}


const user1 = User("test", "20",false);
const user2 = User("test222", "40",true);

console.log(user1)

/**
 * Global Execution Context:

When this script runs, a global execution context is created for the file. This context handles the execution of all the global code (e.g., function declarations, variable declarations, and assignments).
The User function is stored in memory during the creation phase of the global execution context.
Execution Contexts for Function Calls:

When the User function is invoked using User("test", "20", false) and User("test222", "40", true), execution contexts are created for each function call.
Function Calls:
User("test", "20", false):

A new execution context is created for this function call.
this inside the function refers to the global object (e.g., window in browsers or global in Node.js) because the function is invoked without the new keyword.
The function assigns properties name, logincount, and isSignedIn to the global object.
This execution context is destroyed once the function finishes executing.
User("test222", "40", true):

Another new execution context is created for this function call.
Similarly, this refers to the global object, and the properties overwrite the previous values on the global object (since they are global variables).
This execution context is also destroyed once the function finishes executing.
 * 
 * 
 * 
 */


function User(name, logincount, isSignedIn){
    this.name = name;
    this.logincount = logincount;
    this.isSignedIn = isSignedIn;
    return this
}


const user3 = new User("test", "20",false);
const user4 = new User("test222", "40",true);

console.log(user1)



function User(name, logincount, isSignedIn){
    this.name = name;
    this.logincount = logincount;
    this.isSignedIn = isSignedIn;
     
    this.sayHello = ()=>{
        console.log(`this is username: ${this.name}`);//arrow funcion no access to this.
    }
}
const user5 = new User("test", "20",false);
const user6 = new User("test222", "40",true);

user5.sayHello();
