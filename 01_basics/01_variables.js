const accountId = 132324 //cannot be changed
let accountEmail = "asdjkjas@gmail.com" // obey's scope
var accountPass = "12345" // doesnt obey scope
accountCity = "TX" // works but not recommended. allowed.
let accountState //

//semicolon not required

// accountId = 2 //not allowed. error.

/*
    Prefer not to use var because of issue in block scope and functional scope.
*/

accountEmail= "ajsdkloiop@kklse@gmi;lskd"
accountPass = "34243242"
accountCity = "tete"

console.log(accountId);

console.table ([accountId,accountEmail,accountPass,accountCity,accountState])

