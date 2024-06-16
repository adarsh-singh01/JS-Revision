//ES6


class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password
    }

    encryptPass(){
        return `${this.password}abc`
    }
}

const chai=new User("chai","chai@gmail.com","765")
console.log(chai.encryptPass());


//behind the scene
function Userwa(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password
    }
Userwa.prototype.encryptPass=function(){
        return `${this.password}abc`
    }


const chaiwa=new User("chaiwa","chaiwa@gmail.com","7654")
console.log(chaiwa.encryptPass());