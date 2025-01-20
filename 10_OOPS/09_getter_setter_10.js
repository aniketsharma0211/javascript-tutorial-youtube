class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get password(){
        return this.password.toUpperCase();
    }
    set password(password){
        this.password = password
    }
}


const aniket = new User('h@ai.com')
console.log()

//above code will cause race conditions and 
//RangeError: Maximum call stack size exceeded
// at set password (/workspaces/javascript-tutorial-youtube/10_OOPS/09_getter_setter.js:10:23)
// at set password (/workspaces/javascript-tutorial-youtube/10_OOPS/09_getter_setter.js:10:23)
// at set password (/workspaces/javascript-tutorial-youtube/10_OOPS/09_getter_setter.js:10:23)
// at set password (/workspaces/javascript-tutorial-youtube/10_OOPS/09_getter_setter.js:10:23)
// at set password (/workspaces/javascript-tutorial-youtube/10_OOPS/09_getter_setter.js:10:23)
// at set password (/workspaces/javascript-tutorial-youtube/10_OOPS/09_getter_setter.js:10:23)
// at set password (/workspaces/javascript-tutorial-youtube/10_OOPS/09_getter_setter.js:10:23)
// at set password (/workspaces/javascript-tutorial-youtube/10_OOPS/09_gett


class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get password(){
        return this._password.toUpperCase();
    }
    set password(password){
        this._password = password
    }
}

// here _password field is private.