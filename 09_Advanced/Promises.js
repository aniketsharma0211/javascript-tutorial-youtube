/**

Promise is an object that represnts the eventual completion(or failure) of an async operation.

A promise has 3 states -

pending : initial state, neither fulfilled nor rejected.
fulfilled : operation was completed successfully.
rejected : operation failed.

 */


const promiseOne = new Promise((resolve, reject)=> {
    //Do an async call.
    //DB calls, encryption, N/W calls.
    setTimeout(()=>{
        console.log('async task is complete');
        resolve()
    },1000)
});

promiseOne.then(()=>{
    console.log("promise consumed");
})



new Promise((resolve, reject)=> {
    //Do an async call.
    //DB calls, encryption, N/W calls.
    setTimeout(()=>{
        console.log('async task is complete');
        resolve()
    },1000)
}).then(()=>{
    console.log("consumed again")
})



new Promise((resolve, reject)=> {
    //Do an async call.
    //DB calls, encryption, N/W calls.
    setTimeout(()=>{
        console.log('async task is complete');
        resolve()
    },1000)
}).then(()=>{
    console.log("consumed again")
});


const promisethree = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        console.log('async task is complete');
        const user = {
            user: "12345",
            email: "aniket.sharma@example.com"
        }
        resolve(user)
    },1000)
});

promisethree.then((data)=>{
    console.log(data)
})


new Promise((resolve,reject)=>{
    setTimeout(()=> {
        let error = true;
        if(!error){
            const user = {
                user: "12345",
                email: "aniket.sharma@example.com"
            }
            resolve(user);
        } else {
            reject('error: something went wrong')
        }

    },1000)
}).then((data)=> {
    return user.user;
}).then((user)=>{
    console.log(user)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log('job done');
})

console.log("comes here first!!!")

const promisefive = new Promise((resolve, reject)=>{
    setTimeout(()=> {
        let error = true;
        if(error){
            const user = {
                user: "12345",
                email: "aniket.sharma@example.com"
            }
            resolve(user);
        } else {
            reject('error: something went wrong')
        }

    },1000)
})

async function consumepromisefive() {
   const response =  await promisefive;
   console.log("tessstt",response);
}

consumepromisefive()

async function consumepromise6(){
    try{
    const response = await new Promise((resolve, reject)=>{
        setTimeout(()=> {
            let error = false;
            if(error){
                const user = {
                    user: "12345",
                    email: "aniket.sharma@example.com"
                }
                resolve(user);
            } else {
                reject('error: something went wrong')
            }
    
        },1000)
    });
    console.log(response)
    } catch(error){
        console.log(error)
    }
}

consumepromise6(); //this is your code {"user":"12345","email":"aniket.sharma@example.com"}


async function testFetch1(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const responsejson = await response.json();
        //The response.json() method also returns a Promise,
        //  as parsing the response body is asynchronous.
        //You did not use await with response.json().
        //  Without await, responsejson is a 
        // Promise, not the actual parsed JSON data.
        //  When you pass this unresolved Promise to console.log(),
        //  it won't log the expected JSON data.
        console.log(responsejson);
    } catch(error){
        console.log(error);
    }
}

testFetch1();


fetch("https://jsonplaceholder.typicode.com/users")
.then((data)=>{
    console.log(data.json())//returns Promise<pending>
}).catch((error)=>{
    console.log('error')
})


fetch("https://jsonplaceholder.typicode.com/users")
.then((data)=>{
    return data.json();
})
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log('error')
})