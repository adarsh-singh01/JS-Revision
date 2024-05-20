//Immediately invoked function expression
//used to prevent particular code from pollution of global scope

(function chai(){
    //named IIFE
    console.log(`DB connected`)
})();//here ; is neccessary bcoz we need to end it

((name)=>{
    //unnamed IIFE
    console.log(`DB connected two ${name}`)
})('qurala')