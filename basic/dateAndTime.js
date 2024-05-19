let myDate=new Date()
//console.log(myDate.toString())
//console.log(myDate.toDateString())
//console.log(myDate.toLocaleString())
console.log(typeof myDate)//object

// let myCreatedDate=new Date(2023,0,23)//here zero is january
// let myCreatedDate=new Date(2023,0,23,5,3)
let myCreatedDate=new Date("01-14-2023")//here one is january
console.log(myCreatedDate.toLocaleString())

let myTimeStamp=Date.now()

console.log(myTimeStamp);//time in milisec
console.log(myCreatedDate.getTime());
console.log(Math.floor(myTimeStamp/1000))//time in sec

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);//+1 as index for jan is 0 and we want to print 1
console.log(newDate.getDay());

CustomDate=newDate.toLocaleString('default',{
    weekday:"long",
})

console.log(CustomDate);