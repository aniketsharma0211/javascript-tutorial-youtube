const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]
// marvel_heros.push(dc_heros)
//push updates the original array


console.log(marvel_heros)//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] 
marvel_heros.concat(dc_heros)//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
console.log(marvel_heros)

//concat doesnt change the original array.
/*

mutating methods

| Method         | Description                                     |
|----------------|-------------------------------------------------|
| push()         | Adds elements to the end of the array.          |
| pop()          | Removes the last element.                       |
| shift()        | Removes the first element.                      |
| unshift()      | Adds elements to the beginning of the array.    |
| splice()       | Adds, removes, or replaces elements.            |
| sort()         | Sorts the array in place.                       |
| reverse()      | Reverses the array in place.                    |
| fill()         | Fills the array with a static value.            |
| copyWithin()   | Copies part of the array within itself.         |
*/


// Non-mutating methods

/*

| Method         | Description                                   |
|----------------|-----------------------------------------------|
| concat()       | Combines arrays and returns a new array.      |
| slice()        | Extracts a portion and returns a new array.   |
| map()          | Creates a new array by applying a function.   |
| filter()       | Creates a new array with elements that match a condition. |
| flat()         | Flattens the array to the specified depth.    |
| flatMap()      | Maps and flattens the array in one step.      |

*/
// Spread Operator
const all_new_heros = [...marvel_heros, ...dc_heros] //can join muliple arrays

console.log(all_new_heros)

//flat
const another_array = [1,2,3,[4,5,7],7,[6,7], [6,7,[4,5]]]

const myRealAnotherArray = another_array.flat(2);//here "2" denotes depth to which we need to go.

const myRealAnotherArrayinfinite = another_array.flat(Infinity);//here "infinity" denotes depth to which we need to go.

console.log(myRealAnotherArrayinfinite)

 //of

 let score1 = 100
 let score2 = 200
 let score3 = 300

 console.log(Array.of(score1,score2,score3))