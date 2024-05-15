const game = (function(){
    let board = [[0,0,0],[0,0,0],[0,0,0]]
    let playerID = 1 
    let totalCount = 0;

    /*  
        Fills board sqaure with playerID and swaps players after square is filled
        args: row - board row, col - board col
    */
    const fillSquare = (row, col) => {
        if(board[row][col] == 0){
            board[row][col] = playerID;
            (playerID == 1) ? playerID=2 : playerID=1
            totalCount +=1;
        }
        else{
            console.log("Invalid move, spot is taken")
        }
    }

    /*  
        Iterates through board and sets board squares to value 0
        args: None
    */
    const clearBoard = () => {
        for (let i=0; i<3; i++){
            for (let j=0; j<3; j++){
                board[i][j] = 0;
            }
        }
        playerID = 1;
        totalCount = 0;
    }

    /*  
        Checks board to see if player had 3 in a row
        args: None
        returns: 1 - player 1 wins, 2 - player 2 wins, 0 no player has won
    */
    const checkIfWin = () => {
        // 8 methods of winning, 2 players can win
        // player 1
        let winMapP1 = {
            ...(board[0][0] == 1 && board[1][1] == 1 && board[2][2] == 1 && { diagonalLeft: true }),
            ...(board[2][0] == 1 && board[1][1] == 1 && board[0][2] == 1 && { diagonalRight: true }),
            ...(board[0][0] == 1 && board[0][1] == 1 && board[0][2] == 1 && { firstRow: true }),
            ...(board[1][0] == 1 && board[1][1] == 1 && board[1][2] == 1 && { secondRow: true }),
            ...(board[2][0] == 1 && board[2][1] == 1 && board[2][2] == 1 && { thirdRow: true }),
            ...(board[0][0] == 1 && board[1][0] == 1 && board[2][0] == 1 && { firstCol: true }),
            ...(board[0][1] == 1 && board[1][1] == 1 && board[2][1] == 1 && { secondCol: true }),
            ...(board[0][2] == 1 && board[1][2] == 1 && board[2][2] == 1 && { thirdCol: true })
        }
        if(
            winMapP1['diagonalLeft'] ||
            winMapP1['diagonalRight'] ||
            winMapP1['firstRow'] ||
            winMapP1['secondRow'] ||
            winMapP1['thirdRow'] ||
            winMapP1['firstCol'] ||
            winMapP1['secondCol'] ||
            winMapP1['thirdCol'] 
        ){
            return 1
        }

        // player 2
        let winMapP2 = {
            ...(board[0][0] == 2 && board[1][1] == 2 && board[2][2] == 2 && { diagonalLeft: true }),
            ...(board[2][0] == 2 && board[1][1] == 2 && board[0][2] == 2 && { diagonalRight: true }),
            ...(board[0][0] == 2 && board[0][1] == 2 && board[0][2] == 2 && { firstRow: true }),
            ...(board[1][0] == 2 && board[1][1] == 2 && board[1][2] == 2 && { secondRow: true }),
            ...(board[2][0] == 2 && board[2][1] == 2 && board[2][2] == 2 && { thirdRow: true }),
            ...(board[0][0] == 2 && board[1][0] == 2 && board[2][0] == 2 && { firstCol: true }),
            ...(board[0][1] == 2 && board[1][1] == 2 && board[2][1] == 2 && { secondCol: true }),
            ...(board[0][2] == 2 && board[1][2] == 2 && board[2][2] == 2 && { thirdCol: true })
        }
        if(
            winMapP2['diagonalLeft'] ||
            winMapP2['diagonalRight'] ||
            winMapP2['firstRow'] ||
            winMapP2['secondRow'] ||
            winMapP2['thirdRow'] ||
            winMapP2['firstCol'] ||
            winMapP2['secondCol'] ||
            winMapP2['thirdCol'] 
        ){
            return 2
        }

        if (totalCount == 9)
            return 3
        else
            return 0
    }

    const isFilled = (row, col) => {
        return board[row][col] != 0
    }

    const getBoardState = () => {
        return board
    }

    const getPlayerID = () => {
        return playerID
    }

    return { fillSquare, checkIfWin, clearBoard, isFilled, getBoardState, getPlayerID }
})();

/* let winner = 0

while(winner == 0){
    console.log("player: " + game.getPlayerID());
    let x = prompt("Row: ");
    let y = prompt("Col: ");

    game.fillSquare(x,y)
    console.log(game.getBoardState())
    winner = game.checkIfWin()
}

console.log("Winner: Player " + winner )
 */

const gameDocument = document.querySelector(".gameBoard");
const endingText = document.querySelector(".endingText");

let gameEnd = false;

const checkWin = () => {
    winNum = game.checkIfWin();

    if(winNum == 0){
        return ""
    }
    if(winNum == 1){
        gameEnd = true;
        return "Game Over! Player 1 Wins"
    }
    if(winNum == 2){
        gameEnd = true;
        return "Game Over! Player 2 Wins"
    }
    if(winNum == 3){
        gameEnd = true;
        return "Game Over! Draw"
    }
}

const resetGame = () => {
    game.clearBoard()
    gameEnd = false;
    endingText.innerHTML = "";
    let squares = gameDocument.querySelectorAll(".squareImage");
    for (let i = 0; i < squares.length; i++) {
        squares[i].src = "square.jpg";
    }
}

const handleOnClick = (row, col, rowName, colName) => {
    if (! game.isFilled(row, col) && gameEnd == false){
        (game.getPlayerID() == 1) ? 
            gameDocument.querySelector(rowName).querySelector(colName).querySelector(".squareImage").src = "cross.png" : 
            gameDocument.querySelector(rowName).querySelector(colName).querySelector(".squareImage").src = "circle.jpg" 
        game.fillSquare(row, col);
        endingText.innerHTML = checkWin();
    }
}

const button = document.querySelector(".resetButton");
button.addEventListener("click", (event) => { resetGame() });

const square1 = document.querySelector(".firstRow").querySelector(".firstCol");
square1.addEventListener("click", (event) => { handleOnClick(0, 0, ".firstRow", ".firstCol") });

const square2 = document.querySelector(".firstRow").querySelector(".secondCol");
square2.addEventListener("click", (event) => { handleOnClick(0, 1, ".firstRow", ".secondCol") });

const square3 = document.querySelector(".firstRow").querySelector(".thirdCol");
square3.addEventListener("click", (event) => { handleOnClick(0, 2, ".firstRow", ".thirdCol") });

const square4 = document.querySelector(".secondRow").querySelector(".firstCol");
square4.addEventListener("click", (event) => { handleOnClick(1, 0, ".secondRow", ".firstCol") });

const square5 = document.querySelector(".secondRow").querySelector(".secondCol");
square5.addEventListener("click", (event) => { handleOnClick(1, 1, ".secondRow", ".secondCol") });

const square6 = document.querySelector(".secondRow").querySelector(".thirdCol");
square6.addEventListener("click", (event) => { handleOnClick(1, 2, ".secondRow", ".thirdCol") });

const square7 = document.querySelector(".thirdRow").querySelector(".firstCol");
square7.addEventListener("click", (event) => { handleOnClick(2, 0, ".thirdRow", ".firstCol") });

const square8 = document.querySelector(".thirdRow").querySelector(".secondCol");
square8.addEventListener("click", (event) => { handleOnClick(2, 1, ".thirdRow", ".secondCol") });

const square9 = document.querySelector(".thirdRow").querySelector(".thirdCol");
square9.addEventListener("click", (event) => { handleOnClick(2, 2, ".thirdRow", ".thirdCol") });