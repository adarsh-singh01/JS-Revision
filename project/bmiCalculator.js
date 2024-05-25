form=document.querySelector("form")
//height=document.querySelector('#height')//when page is newly reloaded...it takes value as empty.thats why we dont do it this way
//console.log(height.value)

form.addEventListener('submit',(e)=>{
  e.preventDefault()
    console.log(e.target)
    height=parseInt(document.querySelector('#height').value)
    //console.log(height.value)
    weight=parseInt(document.querySelector('#weight').value)
    //console.log(weight.value)
    results=document.querySelector('#results')

    if(height==='' || height<0 || isNaN(height)){
      results.innerHTML=`enter valid height ...your value is ${height}`
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
      results.innerHTML=`enter valid weight ...your value is ${weight}`
  }else{
    const bmi=(weight / ((height * height) / 10000)).toFixed(2);
    
    switch (true){
      case (bmi<18.6):
      results.innerHTML=`${bmi} Under Weight`
      break;
      case (bmi>18.6 && bmi<24.9):
      results.innerHTML=`${bmi} Normal Range`
      break;
      case (bmi>24.9):
      results.innerHTML=`${bmi} Overweight`
      break;
      default:
      results.innerHTML=`${bmi}`
      break;
    }
  }
})