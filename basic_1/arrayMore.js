const planets=["earth","mars","pluto"]
const places=["mumbai","palestine","goa"]

//planets.push(places)//adds places as a single element in array planets

const allElements=planets.concat(places)//it makes a new array that has elements of both

console.log(allElements)
console.log(planets)

//concat alternative is spread operator
//kaanch ka glass toot ke bikhar/spread ho jaata hai

const allthings=[...places,...planets]
console.log(allthings)

const deepArray=[1,2,3,[4,6,7],6,[2,3,[8,9]]]//here depth is 3
const undeepArray=deepArray.flat(Infinity)//infinity is depth

console.log(undeepArray)

console.log(Array.isArray("adarsh"))
console.log(Array.from("adarsh"))//makes an array out of given thing.
console.log(Array.from({name:"adarsh"}))//here it cant make array as it  need to  be specified whether to make array of key or the value

let s1=222
let s2=999
let s3=444

console.log(Array.of(s1,s2,s3))//makes an array out of given set of elements.