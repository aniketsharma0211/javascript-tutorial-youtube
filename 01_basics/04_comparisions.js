console.log("2" > 1)//javascript converts string to number and compares. so returns true
console.log("02" > 1)//javascript converts string to number and compares. so returns true
console.log(2 > "1")//javascript converts string to number and compares. so returns true


/* avoid below conversions*/

//some operator convert null to 0 and some to NaN
console.log(null > 0)//javascript converts null to 0 and compares. so returns true
console.log(null == 0)// javascript converts null to 0 and compares. so returns true
console.log(null >= 0)//returns true

console.log(undefined == 0) //false
console.log(undefined >= 0) //false
console.log(undefined > 0) //false


//=== not only compares value but also compares datatype.
//== converts

console.log("2" == 2)
console.log("2" === 2)//returns false bcs one is string other is number