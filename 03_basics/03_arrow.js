const user = {
    name : "Aniket",
    price : "9999",
    welcomeMessage: function(){
        console.log(`Welcome ${this.name}`)
    }
}
// user.welcomeMessage()//Welcome Aniket
// user.name = "testttt"
// user.welcomeMessage()//Welcome testttt


// function chai(){
//     let user = 'Aniket'
//     console.log(this.user) //undefined. bcs this works only with objects.
// }

// chai()

const chai = () => {
    let username = "test"
    console.log(this.username)// still undefined
}
chai();


const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(3,5))


//same thing can be re-written as implicit return

const addTwo1 = (num1, num2) => num1 + num2 

const user1 = {
    name : "Aniket",
    price : "9999",
    welcomeMessage: function(){
        console.log(`Welcome ${this.name}`)
    },
    welcomeMessageArrow: () => {
        console.log(`Welcome ${this.name}`)
    }
}

console.log(user1.welcomeMessage()) //prints welcome aniket

console.log(user1.welcomeMessageArrow()) // Prints Welcome undefined.

//This is because arrow function doesnt create its own execution context.
