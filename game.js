var secretNumber = (18);
var guess = prompt('Pick a number between one and twenty');

if (Number(guess) === secretNumber) {
  alert ("Yay! You got it!!");
}

else if (Number(guess) > secretNumber) {
  alert ('Hmmm...too high, try again');
}

else {
  alert ('Too low, try again');
}