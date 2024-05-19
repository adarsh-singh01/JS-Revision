//Stack (primitive) 
//Heap (non primitive)

let username="_ideal_singh"
let anotherUsername=username;

anotherUsername="adarsh-singh01"//it does changes in the copy of username
console.log(anotherUsername)
console.log(username)//_ideal_singh

//-----------------

let user1={
    name:"adarsh",
    age:99,
}

let user2=user1//here user2 do reference to user1

user2.age=20;//do changes in original

console.log(user1.age)
console.log(user2.age)



