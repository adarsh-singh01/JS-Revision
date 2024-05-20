//ForEach is a built in in array...its in prototype of array

const coding=["js","cpp","python"]

coding.forEach(function(val){
    //console.log(val);
})

coding.forEach((item)=>{
    //console.log(item);
})


function printMe(item){
    //console.log(item)
}

coding.forEach(printMe)//printMe() wont work here qki bs reference dena hai


coding.forEach((item,theIndex,arr)=>{//in params it contains this things also
    //console.log(item,theIndex,arr)
})



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=>{
    //console.log(item)
    console.log(item.languageName)
})