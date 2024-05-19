//singleton 
//when made thru constructor....like object.create

//object literals

//in fact arrays are objects with keys as indexes
const mySymbol = Symbol("key1")

const jsUser={
    name:"mukesh",//name is a string,all keys are string
    [mySymbol]:"meriKey1",//this is syntax to use symbol
    age:22,
    "father name":"om singh",//it cant be accessed by dot notation...as it has space
    location:"ghazipur",
    lastLoginDays:["monday","saturday"]
}

console.log(jsUser.name)
console.log(jsUser["name"])//square notation
console.log(jsUser["father name"])//only this way u can access father name.
console.log(jsUser[mySymbol])


jsUser.location="aligarh"
//Object.freeze(jsUser)//dont allow any change further
//jsUser.location="bombay"//wont give error...but it'll do nothing
//console.log(jsUser)
jsUser.greeting=function(){
    console.log("Hello JS user")
}

jsUser.greeting2=function(){
    console.log(`hello ${this.name} bhai`)//this -->use to do reference to same object we are in.
}

console.log(jsUser.greeting())
console.log(jsUser.greeting2())