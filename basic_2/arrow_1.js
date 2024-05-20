const user={
    username:"adarsh",
    price:777,
    welcomeMsg:function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this);
    }
}

// user.welcomeMsg()
// user.username="sam"
// user.welcomeMsg()
console.log(this)//it'll return {}...but in browser inspect it returns something

// function chai(){
//     let username="mohit"
//     console.log(this.username)//undefined...this works on object only
//     //console.log(this)//it return something
// }

// chai()




// const chai=function(){
//     let username="koko"
//     console.log(this.username)
// }


const chai= () =>{
    let username="furi"
    console.log(this);
}
chai()

// const addTwoNums=(num1,num2)=>{
//     return num1+num2
// }

// const addTwoNums=(num1,num2)=> num1+num2 //this method is called implicit return ... it assumes there is return...use when ek hi line ka statement ho

const addTwoNums=(num1,num2)=>(num1+num2)//another syntax
console.log(addTwoNums(3,5))

const objectReturn=()=>({username:"adarsh"})//to return object it should be in parenthesis ({})

console.log(objectReturn())