class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        //User.call(this,username)//Syd kuch aesa krna padta agr ES6 na hota to
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`a new course was added by ${this.username}`)
    }
}
const chai=new Teacher("om","om@fb.com",123)
chai.addCourse()

chai.logMe()

const yu=new User("YU")
yu.logMe()

console.log(chai instanceof User)