/*Js is a prototypal lang...jaldi haar nhi maanti

js has prototypal inheritence

everything in js is a object*/

function multiply5(num){
    return num*5
}

multiply5.power=2

console.log(multiply5(7));
console.log(multiply5.power);
//console.log(multiply5.prototype)

function createUser(username,score){
    this.username=username
    this.score=score
}

//making a property in prototype
createUser.prototype.increment=function(){
    this.score++//this mtlb jis ne bulaya hai
}
createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`)
}
const chai= new createUser("adarsh",78)//new keyword tells there are additional properties that have come.
const tea=createUser("adan",99)
chai.increment()
chai.printMe()//yaha .prototype.printMe nhi likha wo js dekh lega.


