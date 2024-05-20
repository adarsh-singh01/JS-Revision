var c=300
if(true){
    const a=55//a,b have only block scope but var have global scope
    let b=77
    var c=88//var has scope problem...it can be accessed by outside also
    console.log(`inner a:${a}`)
}

//console.log(a)
//console.log(b)
console.log(c)

//scope in node environment and in windows/browser is different

//{} is used to declare object but in functions,if elses,it is scope

//----------------------------

function one(){//closure example maybe
    const username="adarsh"//global...parent cant take icecream from child
    function two(){
        const website="reddit"//local...child can take icecream from parent
        console.log(username)
    }
    //console.log(website)//it'll give error
    two()
}

one()


//+++++++++Interesting+++++++++


console.log(addOne(5))//accessing before declaring...it works fine
function addOne(num){
    return num+1
}


//console.log(addTwo(8))//it give error bcoz it func is stored in a variable
const addTwo=function(num){//addTwo is also a function but sometimes called an expression
    return num+2
}
//this is maybe called hoisting
