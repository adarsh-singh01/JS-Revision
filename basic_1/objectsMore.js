//const fbUser=new Object()//singleton
const fbUser={}//literal

fbUser.id="1bh"
fbUser.name="mohit"
fbUser.isLoggedIn=false

console.log(fbUser);

const xUser={
    email:"a@a.com",
    fullName:{
        userFullName:{
            firstName:"adarsh",
            lastName:"singh"
        }
    }
}

console.log(xUser.fullName.userFullName.firstName)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const obj3={obj1,obj2}//not the thing that we want

//const obj3=Object.assign({},obj1,obj2)//here,{}is target and obj1and2 are source...{} is not compulsory but advisable

const obj3={...obj1,...obj2}
console.log(obj3)


console.log(Object.keys(fbUser))//array of keys
console.log(Object.values(fbUser))
console.log(Object.entries(fbUser))//array of key,value in arrays
console.log(Object.hasOwnProperty('isLoggedIn'))//tells whether key exist or not


const course={
    courseName:"js in hindi",
    price:"990",
    courseInstructor:"adarsh"
}

//console.log(course.courseInstructor)

//destructuring 
//const {courseInstructor}=course
const {courseInstructor:instructor}=course
console.log(instructor)


//JSON

// {
//     "name":"hojo"
//     "courseName":"DSA"
//     "price":"Rs.9"
// }


[
    {},
    {}
]