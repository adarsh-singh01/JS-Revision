/*
Javascript execution context

js executes in mainly 2 phases

Types of EXECUTION CONTEXT :

1.GLOBAL EXECUTION CONTEXT
it refers the code to "this"
JS is single threaded

2.FUNCTION EXECUTION CONTEXT

in moongoose etc there is 3.EVAL EXECUTION CONTEXT //will not study

code run in 2 Phases.

1.MEMORY CREATION PHASE aka creation phase
2.EXECUTION PHASE
*/
let val1=10
let val2=5
function addNum(num1,num2){
    let total=num1+num2
    return total
}
 
let result1=addNum(val1,val2)
let result2=addNum(88+2)
/*
1. Global execution allocates to "this"


2.Memory phase
val1-->undefined
val2-->undefined
addNum-->defination
result1-->undefined
result2-->undefined

3.Execution Phase

val1<--10
val2<--5
addNum-->new variable environment + Execution Thread (now for it memory and execution phase will happen,it gets DELETED after its work is done)
//after addnum happens
result1<--15
addNum-->new variable environment + Execution Thread (now for it memory and execution phase will happen,it gets DELETED after its work is done)
//after again addnum happens
result2<--10


3.1 memory phase
val1-->undefined
val2-->undefined
total-->undefined

3.2 execution phase
num1<--10
num2<--5
total<--15 //returns to global execution context

*/

/*CALL STACK

works on LIFO

//Go to Google chrome

*/

function one(){
    console.log("one")
    two()
}
function two(){
    console.log("two")
    three()
}
function three(){
    console.log("three")
}

one()
two()
three()
