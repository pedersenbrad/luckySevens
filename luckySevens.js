//dice rolling function
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

//game logic
function playGame() {
  var bet = document.getElementById("bet").value;
  var rounds = 0;
  var winnings = Number(bet);
  var highWinnings = 0;
  var rollWinnings = 0;
  var dice1 = 0;
  var dice2 = 0;

  if (Number(bet) <= 0 || isNaN(bet)) {
      alert("Please enter a number greater than zero.");
      return false;
  }

  while (winnings > 0) {
    dice1 = rollDice();
    dice2 = rollDice();
    rounds = rounds + 1;

    if (dice1 + dice2 == 7) {
      winnings = winnings + 4;
    } else {
      winnings = winnings - 1;
    }
//keeping track of highest winnings and roll count at that time
    if (winnings > highWinnings) {
      highWinnings = winnings;
      rollWinnings = rounds;
    }
  }
  document.getElementById("results").style.display = "block";
  document.getElementById("oBet").innerText = bet;
  document.getElementById("rounds").innerText = rounds;
  document.getElementById("highWinnings").innerText = highWinnings;
  document.getElementById("rollWinnings").innerText = rollWinnings;

  return false;
}
