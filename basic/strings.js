const myName="adarsh"
const repos=19;

console.log(myName+repos)

console.log(`hello i am ${myName} and my github has ${repos} repos`)//interpolation

const gameName=new String("adarsh-singh")

//gameName is a object where each index is key and each word is a value and it has many props like prototype etc

console.log(gameName[0]);
console.log(gameName.__proto__)//returns a empty object but in real it is full of functions;

console.log(gameName.length)

console.log(gameName.toUpperCase());//although touppercase is a method in prototype but we can access it like this also.
console.log(gameName.charAt(6))
console.log(gameName.indexOf('h'))

const newStr1=gameName.substring(0,4)//ignores neg values
console.log(newStr1)

const newStr2=gameName.slice(-6,4)//accept neg values
console.log(newStr2)

const newStr3=gameName.substring(0,4)//ignores neg values
console.log(newStr3)

const newString="  hurray   "
console.log(newString);
console.log(newString.trim())

const url="https://adarsh.com/adarsh%20singh"

console.log(url.replace('%20','-'))

console.log(url.includes('adarsh'))//returns true or false

console.log(gameName.split('-'));//returns an array in which there is each element as word separated by the -
