
const myArr=[9,8,7,6]//can have any dataType in it
myHeroes=["snape","harry"]

const myArr2=new Array(5,4,3,2)
console.log(myArr2[3])

//array methods

myArr.push(101)
console.log(myArr)
myArr.pop()
console.log(myArr)
myArr.unshift(202)//adds at first index and shift all by one
console.log(myArr)
myArr.shift()//to remove 1st element i.e. pop from index 0


console.log(myArr.includes(88))//false
console.log(myArr.indexOf(88))//if not have then returns -1


const newArr=myArr.join()//converts array to a string

console.log(myArr)
console.log(newArr)

console.log(myArr.slice(1,3))//does change in its copy and not removes in real...last index not included
console.log(myArr)
console.log(myArr.splice(1,3))//last index is included and it deletes the elements for real
console.log(myArr)