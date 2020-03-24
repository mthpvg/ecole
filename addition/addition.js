const number1Div = document.getElementById('number1')
const number2Div = document.getElementById('number2')
const scoreDiv = document.getElementById('score')
const resultDiv = document.getElementById('result')

let number1 = newNumber()
let number2 = newNumber()
let result = ''
let score = 0

print()

document.addEventListener('keypress', keypress)

function keypress(event) {
  if (event.key === 'Enter') {
    score += parseInt(result) === number1 + number2 ? 1 : -1
    number1 = newNumber()
    number2 = newNumber()
    result = ''
  } else {
    result += event.key
  }
  print()
}

function print() {
  number1Div.innerHTML = number1
  number2Div.innerHTML = number2
  scoreDiv.innerHTML = score
  resultDiv.innerHTML = result
}

function newNumber() {
  return Math.round(Math.random() * 10)
}
