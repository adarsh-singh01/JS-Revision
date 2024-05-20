//const userEmail="a@a.com"//true
const userEmail=""//false
//const userEmail=[]//true

if(userEmail){
    console.log("got user email")
} else{
    console.log("dont have user value")
}

// falsy value
//false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy values
// "0",'false'," ",[],{},function(){}

//to check whether array is empty
// if(userEmail.length===0){
//     console.log("array is empty")
// }

//to check whether object is empty
const obj={}
if(Object.keys(obj).length===0){
    console.log("empty object hai")
}

// //fun fact
// false==0//true
// false==''//true
// 0==''//true

//Nullish Coelescing operator (??):null undefined
let val1;
// val1=5??10
// val1=null??10//in real,yaha 10 ni hoga,yaha koi complex function hoga
// val1=undefined??15
// val1=null??10??15//first value jo exist kregi wo assign ho yajegi
// console.log(val1);

//Terniary operator in no way related to above,it is like if else
//condition ? true : false

const iceTeaPrice=100
iceTeaPrice >=80 ? console.log("less than 80") : console.log("more than 80")