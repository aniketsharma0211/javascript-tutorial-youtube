const email = "aniket.sharma@academy.com"

if(email){
    console.log("email exists")
} else{
    console.log("email doesnt exist")
}

//Output:  email exists
const email1 = ""

if(email1){
    console.log("email exists")
} else{
    console.log("email doesnt exist")
}

//Output: email doesnt exist


//falsy values - 
// false, 0, 0n(bigint), "", null, undefined, NaN

//truthy values - 
// "0", 'false', " ", [], {}, function(){}


const arrayi = []

if(arrayi.length === 0){
    console.log("array is empty")
}


const emptyObj = {}

if(Objects.keys(emptyObj.length) === 0){
    console.log("empty array")
}