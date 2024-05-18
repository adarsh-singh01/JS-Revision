let score=33
let pin="37"
let marks="22bn"

console.table([typeof score,typeof pin])

//let pinInNumber=Number(pin)

//console.log(typeof valueInNumber)

let marksInNumber=Number(marks)

console.log(typeof marksInNumber)
console.log(marksInNumber) //returns NaN...undefined in Number is NaN
//null in Number will be converted to 0
//boolean true is 1 false is 0.
//"" is false and "something" is true in bool type

let mark=55

let stringNum=String(mark)
console.log(stringNum)
console.log(typeof stringNum)