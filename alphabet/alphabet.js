const letterDiv = document.getElementById('letter')
const resultDiv = document.getElementById('result')
const scoreDiv = document.getElementById('score')

let score = 0

let letter = null
let result = null

reset()
print()

document.addEventListener('keypress', keypress)

function keypress(event) {
  if (event.key === 'Enter') {
    score += check() ? 1 : -1
    reset()
  } else {
    result = event.key
  }
  print()
}

function check() {
  return result === letter
}

function print() {
  scoreDiv.innerHTML = score
  letterDiv.innerHTML = letter.toUpperCase()
  resultDiv.innerHTML = result.toUpperCase()
}

function reset() {
  letter = newLetter()
  result = ''
}

function newLetter() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const index = Math.round(Math.random() * 25)
  return alphabet[index]
}
