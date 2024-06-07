const randColor=function(){
    let hexCode='0123456789ABCDEF';
    let color="#"
  for(let i=0;i<6;i++){
    randIndex=Math.floor(Math.random()*16)
    //console.log(randIndex)
    color+=hexCode[randIndex]
  }
  console.log(color)
  return color;
  }
  
  //randColor()
  let intervalRefrence
  function startChangeColor(){
    // if (!intervalRefrence) {//write it to make code professional
    //   intervalRefrence = setInterval(changeColor, 1000);
    // }
    //OR
    intervalRefrence=setInterval(changeColor,1000) 
    function changeColor(){
      document.body.style.backgroundColor=randColor();
    }
  }
  
  function stopChangingColor(){
    clearInterval(intervalRefrence)
    //intervalRefrence='null'//flushing out when it has been used to save memory...write it to make code professional
  }
  
  document.querySelector('#start').addEventListener('click',startChangeColor)
  document.querySelector('#stop').addEventListener('click',stopChangingColor)
  
  
  