function addTwoNums(num1,num2){//num1,num2 are parameters
    console.log(num1+num2)//it only prints it,if this func is stored in a variable,then this function should use return
}

addTwoNums(3,5)//here 3,5 are arguments

function add2Num(n1,n2){
   //let result=n1+n2
   //return result;
   return n1+n2
   console.log("it will not print as after return nothing gets executed")
}
const answer=add2Num(3,1)
console.log(`the answer is ${answer}`)



function loginUserMsg(username){//you can also give dafalt values here ..ex:(username="sam")
    if (username===undefined){//we can also write if(!username)...an emoty string or undefined are taken as false by default.
        console.log("enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMsg("adarsh"))//if arg is left empty then undefined will come


//--------------------

function calculateCartPrice(...num1){//it is rest operator...if (val1,val2,...num1)...then 1st twoo args will go in val1,val2...other will go in num1 array
    return num1
}

console.log(calculateCartPrice(100,300,900))
//passing an object
const user={
    username:"adarsh",
    price:299
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
    
}
//handleObject(user)
handleObject(
    {
        username:"darsh",
        price:299
    }
)

//passing an array
const myArr=[299,388,6,899]
function secondValue(getArr){
    return getArr[1]
}
//console.log(secondValue(myArr))
console.log(secondValue([299,388,6,899]))