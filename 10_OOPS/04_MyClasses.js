//ES6

// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword (){
//         return `${this.password}abc`
//     }
// }

// const chai = new User("aniket", "abc","jjj");

// console.log(chai.encryptPassword());


//behind the scene
 function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
 }

 User.prototype.encryptPassword = function () {
    return `${this.password}abc`
 }

const tea = new User("test","test","adsasd")
console.log(tea.encryptPassword())

