var board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, ];
var player1Btn = document.getElementById("player1");
var player2Btn = document.getElementById('player2');
class Player {
    constructor(name, position, money) {
        this.name = name;
        this.position = position;
        this.money = money;
    }
    rollDice() {
        let pos = Math.floor(Math.random() * 6) + 1;
        console.log(pos);
        this.updatePosition(pos);
    }
    updatePosition(pos) {
        this.position += pos;
        console.log(this.position)
        this.updateMoney();

    }
    updateMoney() {
        if (this.position < board.length) {
            this.money -= board[this.position];
        } else {
            this.position %= 15
            this.money -= board[this.position];
        }
        console.log(player1);
        console.log(player2)
    }
}

let player1 = new Player("ProGrad", 0, 1000)
let player2 = new Player("FACEPrep", 0, 1000)

player1Btn.addEventListener('click', function () {
    player1.rollDice();
}, false);
player2Btn.addEventListener('click', function () {
    player2.rollDice();
}, false);