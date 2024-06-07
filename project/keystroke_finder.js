console.log('Project 5');
console.log('adarsh');

document.body.addEventListener('keydown',(e)=>{
  document.querySelector('#insert').innerHTML=`
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key===' ' ? 'space':e.key }</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  `
})

