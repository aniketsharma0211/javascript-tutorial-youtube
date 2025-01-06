const array = [0,1,2,3,4,5, true, "test"]//can be of different types.
//console.log(array[5])

const myArray = new Array(1,2,3,4,5)
//console.log(myArray[1])


// Array methods

//myArray.push(6)//adds at last
//console.log(myArray)
//myArray.pop()//last element
//console.log(myArray)

// myArray.unshift(0); //adds element at first position and shifts others. not recommended.
// console.log(myArray)


// myArray.shift();
// console.log(myArray)//remove first elment.shift others. 

// console.log(myArray.join())//joins by default with "," and converts to string

//slice and splice


//splice manipulates original array whereas slice doesnt
console.log(myArray.slice(1,3)) //[ 2, 3 ]
console.log(myArray);//[ 1, 2, 3, 4, 5 ]
console.log(myArray.splice(1, 3));//[ 2, 3, 4 ]
console.log(myArray);//[ 1, 5 ]