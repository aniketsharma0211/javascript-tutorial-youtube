// if

// if(2==="2"){ //also checks the datatype
//     console.log("executed")
// }

2==="2" ? console.log("true") : false; //short hand way to write



//Nullish coalescing operator(??): null undefined

let val1;
val1 = 5 ?? 10 

console.log(val1)//prints 5

val1 = null ?? 10

console.log(val1) //prints 10

var1 = undefined ?? 15

console.log(var1) //prints 15

val1 = 15 ?? undefined

console.log(val1)//prints 15


val1 = null ?? 10 ?? 20

console.log(val1)//prints 10


val1 = null ?? undefined ?? 20

console.log(val1)//prints 20