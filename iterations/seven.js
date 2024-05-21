const nums=[9,8,7,6,5,4,3,2]

//const newNums=nums.map((num)=>num+10)//implicit return


//chaining
const newNums=nums
                  .map((num)=>num*10)//this array is passed to next chain
                  .map((num)=>num+1)
                  .filter((num)=>num>=40)

console.log(newNums)