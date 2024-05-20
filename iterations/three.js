//for of

//["","",""]
//[{},{},{}]

const arr=[1,2,3,4,5]
for (const num of arr) {
    //console.log(num)
}

const greetings="hello world"
for (const greet of greetings) {
    //console.log(`each char is ${greet}`)
}

const aMap=new Map()
aMap.set('IN','India')
aMap.set('FR','France')
aMap.set('BR','Britain')
aMap.set('IN','India')//wont be added..as map is unique

//console.log(aMap)

for (const [theKey,theValue] of aMap) {
    console.log(theKey,':-',theValue)
}

const myObj={//it is not iterable
    'jojo':56,
    'mojo':77
}
//BELOW CODE DOES NOT WORK
// for (const {theKey,theValue} of myObj) {
//     console.log(theKey,':-',theValue)
// }

