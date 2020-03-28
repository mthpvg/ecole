const number1Div = document.getElementById('number1')
const number2Div = document.getElementById('number2')
const scoreDiv = document.getElementById('score')
const resultDiv = document.getElementById('result')

let score = 0

let number1 = null
let number2 = null
let result = ''

reset()
print()

document.addEventListener('keypress', keypress)

function keypress(event) {
  if (event.key === 'Enter') {
    score += check() ? 1 : -1
    reset()
  } else {
    result += event.key
  }
  print()
}

function check() {
  return parseInt(result) === number1 + number2
}

function print() {
  number1Div.innerHTML = number1
  number2Div.innerHTML = number2
  scoreDiv.innerHTML = score
  resultDiv.innerHTML = result
}

function reset() {
  number1 = newNumber()
  number2 = newNumber()
  result = ''
}

function newNumber() {
  return Math.round(Math.random() * 10)
}
