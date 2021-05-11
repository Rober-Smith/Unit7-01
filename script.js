let randomNumber = 0
let userGuess = 0

document.getElementById('button').addEventListener('click', randomizer)

function randomizer () {
  userGuess = document.getElementById('input').value
  userGuess = parseInt(userGuess)

  randomNumber = (Math.random() * 6) + 1
  randomNumber = parseInt(randomNumber)

  if (userGuess === randomNumber) {
    document.getElementById('answer').innerHTML = 
    "you win"
  }
  
}