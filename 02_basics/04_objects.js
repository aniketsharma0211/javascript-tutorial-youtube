 // create objects using constructor

 //const tinderuser = new Object();//singleton object

const tinderuser = {}
console.log(tinderuser)
tinderuser.id = 1234;
tinderuser.name = "aniket";
tinderuser.isLoggedIn = false


const regularuser = {
    email : "kklda@klkda.com",
    fullName: {
        userfullname: {
            firstName: "Aniket", 
            lastName: "Sharma"
        } 
    }
}


console.log(regularuser.fullName) //{ userfullname: { firstName: 'Aniket', lastName: 'Sharma' } }
console.log(regularuser.fullName.userfullname.firstName)// Aniket

//merge objects

const mergedObjects = {...regularuser, ...tinderuser}
console.log(mergedObjects)/*{
                                email: 'kklda@klkda.com',
                                fullName: { userfullname: { firstName: 'Aniket', lastName: 'Sharma' } },
                                id: 1234,
                                name: 'aniket',
                                isLoggedIn: false
                            }*/

const mergedObjects1 = {regularuser,tinderuser}
console.log(mergedObjects1) /*
                                {
                                regularuser: { email: 'kklda@klkda.com', fullName: { userfullname: [Object] } },
                                tinderuser: { id: 1234, name: 'aniket', isLoggedIn: false }
                                }*/

                                