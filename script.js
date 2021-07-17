//  let randomNumber = Math.floor(Math.random() * 100) + 1;
let numbers = (86, 20);
let randomNumber = numbers; 
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let guessCount = 1;
let resetButton;

function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }

  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!' ;
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll('.resultParas p');
  for(let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  lastResult.style.backgroundColor = 'white';
  randomNumber = 18;
  // randomNumber = Math.floor(Math.random() * 100) + 1;
}

const d = new Date();
document.getElementById("dem").innerHTML = d;

// review buttons code.

let count = 0;
const btns = document.querySelectorAll('.btn');
const value = document.querySelector('#value'); 
const btcont = document.querySelector('.rev');

btns.forEach(btn => {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        console.log(styles);
        if(styles.contains("decrease")){
            count--;
        } else if (styles.contains("increase")){
            count++;
        }else {
            count = 0;
        }
     if(count > 0){
            btcont.style.backgroundColor = "pink";
            value.style.color = "green";
            value.style.fontSize = "40px";
            value.style.backgroundColor = "yellow";
        }
        if(count >= 5){
           btcont.style.backgroundColor = "gray";
            value.style.color = "purple";
        }
          if(count >= 10){
           btcont.style.backgroundColor = "green";
            value.style.color = "blue";
        }
       if(count < 0){
           btcont.style.backgroundColor = "red";
            value.style.color = "blue";
            value.style.backgroundColor = "red";
            value.style.fontSize = "20px";
        }
           if(count === 0){
           btcont.style.backgroundColor = "cyan";
            value.style.color = "#222";
        }
        value.textContent = count;
    })
});
btdc.addEventListener('click', function(){
  setTimeout(() => {
    this.style.fontSize = "20px";
    this.style.backgroundColor = "red";
    lki.innerHTML = "Thanx for your feedback!";
  }, 1000);
});
btin.addEventListener('click', function(){
  setTimeout(() => {
    this.style.backgroundColor= "yellow";
    this.style.fontSize = "40px";
    lki.innerHTML = "Thanx for your feedback and thanx for appreciating the hardwork of a beginner."
  }, 2000);
});

 // Creating object of the Date class
 var date = new Date();
 // Get current hour
 var hour = date.getHours();
 // Get current minute
 var minute = date.getMinutes();
 // Get current second
 var second = date.getSeconds();
 // Variable to store AM / PM
 var period = "";
 // Assigning AM / PM according to the current hour
      if (hour >= 12) {
      period = "PM";
      } else {
      period = "AM";
      }
 // Converting the hour in 12-hour format
      if (hour == 0) {
        hour = 12;
        } else {
      if (hour > 12) {
        hour = hour - 12;
        }
 }
 // Updating hour, minute, and second
 // if they are less than 10
 hour = update(hour);
 minute = update(minute);
 second = update(second);
 // Adding time elements to the div
 document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + period;
 // Set Timer to 1 sec (1000 ms)
 setTimeout(Time, 1000);

 // Function to update time elements if they are less than 10
 // Append 0 before time elements if they are less than 10
function update(t) {
 if (t < 10) {
 return "0" + t;
 }
 else {
 return t;
 }
}
Time();









 
