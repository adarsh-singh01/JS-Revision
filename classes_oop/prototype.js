 let myName="adarsh   "
 //console.log(myName.trim().length)//this works but
console.log(myName.trueLength);//we wanna make it a property

let myHeroes=["thor","spidy"]
let heroPower={
    thor:"hammer",
    spidy:"sling",

    getSpidyPower:function(){
        console.log(`spidy power is ${this.spidy}`)
    }
}
Object.prototype.adarsh=function(){
    console.log(`property har object me lg gyi`)
}
Array.prototype.adan=function(){
    console.log(`property har Array me bs lg gyi`)
}
//ARRAY,STRING,FUNCTION SE HIGHER HAI OBJECT
heroPower.adarsh()
myHeroes.adarsh()//array bhi aage jake object ho jata hai

//heroPower.adan()//it wont work
myHeroes.adan()//bs ye work krega

//PROTOTYPAL INHERITANCE
const teachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:'js dpp',
    fullTime:true,
    __proto__:teachingSupport//old syntax to link
}
//modern syntax
Object.setPrototypeOf(TASupport,teachingSupport)

//SOLUTION

Object.prototype.trueLength=function(){
    console.log(`trueLength : ${this.trim().length}`)
}

"goLU   ".trueLength()
