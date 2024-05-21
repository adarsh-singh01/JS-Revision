const nums=[3,2,1]

// const total=nums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0 /*intial value */ )

// console.log(total)


const total=nums.reduce((acc,currval)=>acc+currval,0)
console.log(total)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceSum=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceSum)