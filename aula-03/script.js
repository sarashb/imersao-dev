var secretNumber = parseInt(Math.random () * 10)
var attempts = 3

while (attempts > 0) {
  var guess = parseInt(prompt("Insert a number among 0-10"))
  
  if (secretNumber == guess) {
    alert ("Congrats! You got the right number.")
    break
  } else if (guess > secretNumber) {
    alert ("The secret number is smaller.")
    attempts = attempts - 1
  } else if (guess < secretNumber) {
    alert("The secret number is bigger")
    attempts = attempts - 1
  }
}

if (guess != secretNumber) {
  alert("Your attemps are over. The secret number was " + secretNumber)
}