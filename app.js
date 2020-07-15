var board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, ];
var player1Btn = document.getElementById("player1");
var player2Btn = document.getElementById('player2');
console.log(board);
console.log(player1Btn);
console.log(player2Btn);

player1Btn.addEventListener('click', rollDice1);
player2Btn.addEventListener('click', rollDice2);

var player1 = ["ProGrad", 0, 1000];
var player2 = ["Faceprep", 0, 1000];

function rollDice1() {
  let position = Math.floor(Math.random() * 6) + 1;
  console.log('Player 1 value', position);
  changePosition1(player1[1], position);
}

function rollDice2() {
  let position = Math.floor(Math.random() * 6) + 1;
  console.log('Player 2 value', position);
  changePosition2(player2[2], position);
}

// update player1 & player2 position
function changePosition1(old, current) {
  var newPosition = old + current;
  player1[1] = newPosition;
  console.log("Player 1", player1[1]);
  updateMoney1(player1[1]);
}

function changePosition2(old, current) {
  var newPosition = old + current;
  player2[1] = newPosition;
  console.log("Player 2", player2[2]);
  updateMoney1(player2[2]);
}

// update the money
function updateMoney1(p1) {
  var updateMoney = 0;
  if (p1 < board.length) {
    updateMoney = player1[2] - board[p1 - 1];
  } else {
    p1 = p1 % 15
    updateMoney = player1[2] - board[p1 - 1];
  }
  player1[2] = updateMoney;
}