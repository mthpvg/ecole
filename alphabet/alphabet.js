const targetDiv = document.getElementById('target')
const scoreDiv = document.getElementById('score')

let score = 0
let letter = newLetter()

print()

document.addEventListener('keypress', keypress)

function keypress(event) {
  score += event.keyCode === letter.charCodeAt() ? 1 : -1
  letter = newLetter()
  print()
}

function print() {
  scoreDiv.innerHTML = score
  targetDiv.innerHTML = letter.toUpperCase()
}

function newLetter() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const index = Math.round(Math.random() * 25)
  return alphabet[index]
}
