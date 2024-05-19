const score=400;
console.log(score)

const balance=new Number(200)
console.log(balance);

console.log(balance.toString().length)//after converting to string we can use string methods also

console.log(balance.toFixed(2))//200.00

const num=1000000
console.log(num.toLocaleString())//supposedly in USA format
console.log(num.toLocaleString('en-IN'));//returns indian fromat

//-----------MATHS-----------

console.log(Math)
//console.log(Math.abs(-8))
//console.log(Math.round(4.45))
//console.log(Math.ceil(4.45))//means touch the celing ...even 4.1 would return 5
//console.log(Math.floor(4.99))//means return lowest value ...here 4
//console.log(Math.max(4,8,7,6))

console.log(Math.random())//return value btw 0 and 1
console.log(Math.floor(Math.random()*10)+1)//we did +1 to avoid getting 0

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)//returns value btw 10 and 20
