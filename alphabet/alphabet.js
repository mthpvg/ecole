const letterDiv = document.getElementById('letter')
const scoreDiv = document.getElementById('score')

let letter = newLetter()
let score = 0

print()

document.addEventListener('keypress', keypress)

function keypress(event) {
  score += event.keyCode === letter.charCodeAt() ? 1 : -1
  letter = newLetter()
  print()
}

function print() {
  scoreDiv.innerHTML = score
  letterDiv.innerHTML = letter.toUpperCase()
}

function newLetter() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const index = Math.round(Math.random() * 25)
  return alphabet[index]
}
