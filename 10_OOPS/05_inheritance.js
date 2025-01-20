class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`username is${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New Course was added by ${this.username}`);
    }
}

const chai = new Teacher('test', 'test', 'test')
chai.addCourse();
chai.logMe();