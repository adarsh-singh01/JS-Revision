// setTimeout(function(){
//   console.log("adarsh")
// },2000)

// setInterval(()=>{
//   console.log("RAM")
// },3000)

const heilMe=function(str){//passing 3rd parameter
    console.log(str+" heil hitler")
  }
  
  // setInterval(heilMe,3000,"i say")//do not execute heilMe,just reference it .//there is 3rd parameter also.
  
  //document.querySelector('h1').innerHTML="changed text"//it changes the 'h1' instantly
  
  function changedText(){
    document.querySelector('h1').innerHTML="changed text"
  }
  
  //const changeH1=setTimeout(changedText,2000)//changes text after 2s.
  //clearTimeout(changeH1)
  let changeH1;//declaring it in global scope
  document.querySelector('#start').addEventListener('click',()=>{
       changeH1=setTimeout(changedText,2000)//we haven't used var,let,const here as its already declared and we are assigning value to it 
    //setTimeout(changedText,2000)
    console.log("started")
  })
  
  document.querySelector('#stop').addEventListener('click',()=>{
    clearTimeout(changeH1)//because changeH1 is in global scope we can access it.
    console.log("stopped")
  })
  
  
  
  
  
  