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