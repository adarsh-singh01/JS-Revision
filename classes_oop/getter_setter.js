class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        //return this.email.toUpperCase()//Agar variable name same hoga to call stack full ho jayegi
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value//Agar variable name same hoga to call stack full ho jayegi isliye underscore lga diya bs name different rakhne k liye
    }

    get password(){//koi agr puche password kya hai to ye encrypted return hoga
        return `${this._password}hitesh`
    }

    set password(value){//ye DB me save hoga
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);