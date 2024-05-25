ghadi=document.querySelector('#clock')

setInterval(()=>{
  let tarik=new Date()
  ghadi.innerHTML=tarik.toLocaleTimeString()
},1000)