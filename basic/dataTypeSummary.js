//7 Primitive
//String,Number,Boolean,null,undefined,Symbol,BigInt

const score=100
const scoreValue=100.3

const isLoggedin=false
const outsideTemp=null
let userEmail;

const id=Symbol('444')
const userId=Symbol('444')

console.log(id===userId)//false


//Reference (Non Primitive)

//Array,Objects,Functions

const roles=['harry','snape',"voldemort"]

let aObj={
    name:"adarsh",
    age:99,
}

const myFunc=function(){
    console.log("i am bird")
}

console.table([typeof scoreValue,typeof outsideTemp,typeof userEmail,typeof id])
console.table([typeof roles,typeof aObj,typeof myFunc])