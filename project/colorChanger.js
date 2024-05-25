buttons=document.querySelectorAll('.button')
//console.log(buttons)
body=document.querySelector('body')
//console.log(body)
buttons.forEach((button)=>{
  //console.log(button)
  //console.log(button.id)
  button.addEventListener('click',function(e){
    console.log(e.target)
    console.log(e.target.id)
    switch (e.target.id){
      case "white":
      body.style.backgroundColor = e.target.id;
      break;
      case "blue":
      body.style.backgroundColor = e.target.id;
      break;
      case "yellow":
      body.style.backgroundColor = e.target.id;
      break;
      case "grey":
      body.style.backgroundColor = e.target.id;
      break;
      // default:
      // body.style.backgroundColor="red"//it dont work
      // break;
    }
  })
})
