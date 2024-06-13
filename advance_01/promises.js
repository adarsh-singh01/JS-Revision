//fetch('https://randuser.com/api').then().catch().finally()//it is called consuming a promise but before that ...we'll learn to make a promise
//as alternative to promises we used Q and bluebird

const promise1=new Promise(function(resolve,reject){
    //do an async task
    //db calls,crytography,network
    setTimeout(function(){
        console.log('async done hogya');
        resolve()//it connects resolve to then
    },1000)  
})

promise1.then(function(){
    console.log("promise consumed")
})

new Promise(function(resolve,reject){
    //do an async task
    //db calls,crytography,network
    setTimeout(function(){
        console.log('async 2 done hogya');
        resolve()//it connects resolve to then
    },1000)  
}).then(function(){
    console.log("promise 2 consumed")
})

const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async done hogya');
        resolve({name:"adan",id:"10"})//it connects resolve to then
    },1000)  
})

promise3.then(function(user){
    console.log(user)//it log { name: 'adan', id: '10' }
})

const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let err=true;
        if (!err){
            resolve({name:"adarsh",id:"80"})//it connects resolve to then
        } else {reject("kuch wrong ho gya")}
    },1000)  
})
promise4.then(function(user){
    console.log(user)//it log { name: 'adan', id: '10' }
    return user.name;
}).then(function(naam){//this is called chaining...
    console.log(naam)//it log user.name
}).catch(function(errorwa){
    console.log(errorwa)
}).finally(()=>{
    console.log("resolve ya reject me se kuch to ho gya")
})


//Handling by async await


const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let err=false;
        if (!err){
            resolve({name:"adsh",id:"80"})//it connects resolve to then
        } else {reject("kuch wrong ho gya")}
    },1000)  
})
async function consumePromise5(){
    try {//trycatch nhi to mtlb hum smjh rhe kabhi error nhi aayega
        const responsewa=await promise5//promise5 ek object hai
        console.log(responsewa)
    } catch (err) {
        console.log(err)
    }
}
consumePromise5()

// async function getAllUsers(){
//     try{
//         const responsewa=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await responsewa.json()//used await here...coz it takes time.
//         console.log(data);
//     } catch (err){
//         console.log("E: ",err);
//     }
// }

// getAllUsers();

//ABOVE CODE CAN BE WRITTEN AS BELOW CODE

fetch('https://jsonplaceholder.typicode.com/users')//THIS CODE WILL BE FIRST AND THEN ALL THE ABOVE CODE WILL BE
.then((responsewa)=>{
    return responsewa.json()
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>console.log(err))

//A fetch() promise only rejects when a network error is encountered (which is usally when there's a permission issue or similar)
//A fetch() promise does not reject on HTTP errors (404,etc)
//fetch has its own special queue called priority queue or microtask queue...it is a fast queue...thats why fetch is executed first then all are executed

//HOW TO SEND DATA WITH FETCH

// const headers={
//     'usename':'oggie99',
//     'password':'qwerty@98',
// }
// fetch('https://ex.com/',{headers});