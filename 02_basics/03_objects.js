//objects can be declared as literal or as a constructor  
// created as literal will never be singleton and created through constructor will always be singleton
 

//object literals

const symb = Symbol("key1")

const jsUser = {
    name: "aniket",
    age : 18,
    location: "test",
    email: "kadklsd@asdkjak.com",
    isLoggedIn: false,
    lastLoginDate: ["Monday", "Thursday"],
    "last Name": "Sharma",
    [symb]: "myKey1"
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser[symb])//symb without quotes 
//console.log(jsUser.last Name) the "." operator fails here

 //how to update the value 

 jsUser["email"] = "aniket.sharma@academy.com"
 console.log(jsUser["email"])

 //Object.freeze(jsUser);//freezes the object for updates

 jsUser["email"] = "aniket.sharma@sapient.com"

console.log(jsUser["email"])



// adding function to objects
jsUser.greetings = function(){
    console.log(`Hello, ${this.name}`);
}

console.log(jsUser["greetings"]) //function returned back. didnt execute the funciton just returned the reference

console.log(jsUser.greetings())// prints log.

