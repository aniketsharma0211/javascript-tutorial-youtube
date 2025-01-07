
//{} denotes scope of a block - block can be if-else, for, function. But not object. 
// Curly braces in objects are used for definition.


if (true){
    let a = 10
    const b = 20
    var  c = 30
}

//console.log(a) //not defined error
//console.log(b) //not defined error
console.log(c) // prints 30. this is a problem. 
// if same variable defined elsewhere it will be a problem.



let x = 500
if (true) {
   let x = 50
   console.log(x)//50
}

console.log(x)//500



let y = 500
if (true) {
   y = 50
   console.log(y)//50
}

console.log(y)//50




//Nested scope
// inner functions can use variables of outer function. but opposite not possible
function one(){
    const name = "Aniket"
    function two(){
        const website= "youtube"
        console.log(name)
        console.log(website)
    }
    //console.log(website) //error
    two()
}

console.log(one())

// same works for if else as well.

