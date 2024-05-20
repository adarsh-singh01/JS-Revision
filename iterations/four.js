//for in
const myObj={
    'jojo':56,
    'mojo':77
}

for (const theKey in myObj) {
    //console.log(theKey)//returns key
    //console.log(myObj[theKey])returns value
    console.log(`${theKey} :-- ${myObj[theKey]}`)
}

//trying for arrays

const arr=["a","b"]
for (const num in arr) {
    //console.log(num)//it prints keys / indexes
    console.log(arr[num])//returns array elemrts
}

//here we cant do iteration on MAP



