let player = "X";
let moves = 0;
let grid = document.getElementsByClassName("grid");
let board = ["", "", "", "", "", "", "", "", ""];
let index = -1;
let finishedGame = false;

function divsSetup() {
    for (let i = 0; i < grid.length; ++i) {
        grid[i].addEventListener('click', makeMove);
    }
}

function makeMove(e) {
    if (!finishedGame && e.target.innerHTML == "") {
        let symbol = switchPlayers();
        e.target.innerHTML = symbol;
        board[++index] = symbol;
    }
    ++moves;
    checkWinner();
}

function switchPlayers() {
    if (player == 'X') {
        player = '0';
    } else {
        player = 'X';
    }
    return player;
}

function checkWinner() {
    let winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6] 
    ];
    for (let i = 0; i < winningCombinations.length && !finishedGame; ++i) {
        let [firstPOs, secondPos, thirdPos] = winningCombinations[i];
        let firstSquare= grid[firstPOs].innerText;
        let secondSquare = grid[secondPos].innerText;
        let thirdSquare = grid[thirdPos].innerText;
        if (firstSquare != "" && firstSquare == secondSquare && secondSquare == thirdSquare) {
            finishedGame = true;
            displayWinner();
        }
    }
    if (!finishedGame && moves == 9) {
        document.getElementById("resultDisplay").innerText = "DRAW!";
        finishedGame = true;
    }
}

function displayWinner() {
    document.getElementById("resultDisplay").style.color = "green";
    document.getElementById("resultDisplay").innerText = player + " WON!";
}

function restartGame() {
    window.location.reload();
}

divsSetup();