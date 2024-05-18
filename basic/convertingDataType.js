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
//boolean true 1 false 0