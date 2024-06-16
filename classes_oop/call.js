function setUsername(username){
    //complex DB calls
    this.username=username
    console.log("called")
}

function createUser(username,email,password){
    //setUsername(username)//it refrence it but do not call properly
    //setUsername.call(username)//it also dont work
    setUsername.call(this,username)//iska mtlb ye wala context lena h upar
    this.email=email
    this.password=password
}

const chai=new createUser("chai","chai@fb.com","99pp")
console.log(chai)