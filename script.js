let randomNumber = 0
let userGuess = 0
//  varables for numbers

document.getElementById('calculate').addEventListener('click', buttonOne)

function randomizer () {
  userGuess = document.getElementById('input').value
  userGuess = parseInt(userGuess)

  //  Our number generator from 1-6
  randomNumber = (Math.random() * 6) + 1
  randomNumber = parseInt(randomNumber)

  if (userGuess === randomNumber) {
   document.getElementById('answer').innerHTML ="you win"
  }
}