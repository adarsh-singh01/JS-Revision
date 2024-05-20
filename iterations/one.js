//for

for (let i = 0; i < 11; i++) {
    const element = i;
    if (element==5){
        //console.log("5 is best")
    }
    //console.log(element)
    
}

for (let i = 0; i <=2; i++) {
    //console.log(`outer loop ${i}`)
    for (let j = 0; j <=10; j++) {
        const element = j;
        //console.log(element)
        //console.log(`${i} X ${j} = ${i*j}`)
    }
    
}


let myArr=["pluto","sun","andromeda"]
console.log(myArr.length);
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    //console.log(element)
    
}


//break and continue

for (let index = 0; index <=20; index++) {
    if(index==5){
        //console.log(`5 is best..break loop`)
        break//bas ab aage kuch ni hoga
    }
    //console.log(`val of i is ${index}`)
    
}

for (let index = 0; index <=20; index++) {
    if(index==5){
        console.log(`5 is best..but continue loop`)
        continue//break nhi hoga...lekin bs iss value k liye neeche nhi jaayega
    }
    console.log(`val of i is ${index}`)
    
}