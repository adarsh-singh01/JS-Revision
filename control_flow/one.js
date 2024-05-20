//if

const isLoggedin=true

if(isLoggedin){
    console.log("Heloo user")
} else {
    "Login please"
}

// <,>,<=,>=,==,!=,===,!==
// const score=300
// if(score>100){
//     let power="fly"//if it was var then ye bahar bhi access hota which we dont want
//     console.log(`user power :${power}`)
// }
// console.log(`user power : ${power}`)//as power is const/let ,it cant access it

const balance=200
//if (balance>100) console.log("test") ,console.log("test2") //it has implicit scope,yaha pe comma laga k multiple cheeze likhna advisable nhi h

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
