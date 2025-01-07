function sum(a,b){// a, b are called as PARAMETERS
    console.log(a+b)
    return a+b;
}

sum() //NaN, bcs we pass both values as null

sum(2,7)// returns 9. 2 and 7 are called arguments 

sum (4, "2")//42

sum ("4", 2)//42

sum ("4", null)//42


const result = sum(3,  5)
console.log(result)



function loggedinusermessage(username="Sam"){// this is how we can give default value. undefined condition is not required.
    if(!username){ //same condition as username === undefined
        console.log("pls enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loggedinusermessage("Aniket"))
console.log(loggedinusermessage()) //undefined just logged in



//method with multiple dynamic parameters
function calculateCartPrice(...num1){ //we use rest operator
    return num1
}

console.log(calculateCartPrice(200,400,500))//[ 200, 400, 500 ]




//method with multiple dynamic parameters
function calculateCartPrice(value1, value2, ...num1) {  //we use rest operator
    return num1
}

console.log(calculateCartPrice(200,400,500,2000))//[ 500, 2000 ]
//200 is treated as value1 and 400 as value2.



const user = {
    name: "Aniket",
    class: "X"
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} studies in class ${anyObject.class}`)
}

handleObject(user)
//can also be directly passed
handleObject({
    name: "Aniket",
    class: "X"
})


//############### interesting #############
addOne(5) //works fine
function addOne(num){
    return num + 2;
}

addTwo(5) //doesnt work Cannot access 'addTwo' before initialization
const addTwo = function (num){
    return num + 2;
}


