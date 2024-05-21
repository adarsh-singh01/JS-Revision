const coding=["js","cpp","python"]
//forEach does not return values

const val=coding.forEach((item)=>{
    //console.log(item);
    return item//iske hone na hone se koi farq nhi pdega
})

//console.log(val)

const nums=[9,8,7,6,5,4,3]

//const newNums=nums.filter((num)=>num>4)//this method is called implicit return ... it assumes there is return...use when ek hi line ka statement h


// const newNums=nums.filter((num)=>{
//     return num>4//yaha pe return likhna pdega qki scope open krdiya to implicit return ni hoga
// })

// console.log(newNums)


const newNums=[]

nums.forEach((num)=>{
    if (num>4){
        newNums.push(num)
    }
})
//console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //const userBooks=books.filter((bk)=>bk.genre==='History')

  const userBooks=books.filter((bk)=>{
    return bk.publish>=1995 && bk.genre==='History'
})
  console.log(userBooks)

