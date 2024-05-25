let randomNum=parseInt(Math.random()*100+1)
console.log(randomNum)

const submit = document.querySelector('#subt');
let input=document.querySelector('#guessField');
let prevGuess=[];
let guessNo=1;
let playGame = true;
const remaining = document.querySelector('.lastResult');
const guessSlot = document.querySelector('.guesses');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

if (playGame){
  submit.addEventListener('click',(e)=>{
    e.preventDefault()
    const guess = parseInt(input.value);
    console.log(guess);
    validInput(guess);
  })
}

function validInput(guess){
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess)
    if (guessNo >10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function displayGuess(guess) {
  input.value = '';
  guessSlot.innerHTML += `${guess}, `;//idk why += is written
  guessNo++;
  remaining.innerHTML = `${11 - guessNo} `;
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNum) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNum) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
 input.value = '';
  input.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - guessNo} `;
    input.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  }
  );
}



