// Go on in a webpage and in inspect...do these things.
//console.dir(document)

//console.log(window.document)
//console.log(document)

//document.getElementById('heading')

//document.getElementById('heading').innerHTML="<h1>Hello Robot</h1>"

//THERE WAS A DIAGRAM IN VIDEO 31...SEE THAT


document.getElementById('title')

document.getElementById('title').class//undefined
document.getElementById('title').className
document.getElementById('title').getAttribute('class')
document.getElementById('title').setAttribute("class",'paragraph')//it overwrites
document.getElementById('title').setAttribute("class",'para heading')//write prev class to keep it

const title=document.getElementById('title')
title.style.backgroundColor='green'
title.style.padding="15px"
title.style.borderRadius="15px"

//innerHTML,textContent,innerText
title.innerText//it does not show the text if its hidden by css.
title.textContent//it shows no matter if its hidden or shown.
title.innerHTML//it show the html tags also.


document.querySelector('h1')//returns 1st element with this query
document.querySelector('.heading')
document.querySelector('#title')

document.querySelector('input[type="password"]')

const myul=document.querySelector('ul')
myul.querySelector('li')
const turnGreen=myul.querySelector('li')
turnGreen.style.backgroundColor="green"

turnGreen.innerText="jojo"


//NodeList and HTMLCollection are NOT pure arrays.

tempLiList=myul.querySelectorAll('li')//return a NodeList

tempLiList.style.color='green'//it will not work
tempLiList[0].style.color='green'//even if a nodeList has 1 element ... we need to specify index

tempLiList.forEach(function(l){
    l.style.backgroundColor='green'
})

const tempClassList=document.getElementsByClassName('list-item')//return a HTMLCollection

const convertedArray=Array.from(tempClassList)//to make something an array

convertedArray.forEach(function(li){
    console.log(li)
    li.style.color='orange'
})

