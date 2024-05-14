const game = (function(){
    let board = [[0,0,0],[0,0,0],[0,0,0]]
    let playerID = 1 

    /*  
        Fills board sqaure with playerID and swaps players after square is filled
        args: row - board row, col - board col
    */
    const fillSquare = (row, col) => {
        if(board[row][col] == 0){
            board[row][col] = playerID;
        }
        (playerID==1) ? playerID=2 : playerID=1
    }

    /*  
        Iterates through board and sets board squares to value 0
        args: None
    */
    const clearBoard = () => {
        for (row in board){
            for (col in board){
                board[row][col] = 0
            }
        }
    }

    /*  
        Checks board to see if player had 3 in a row
        args: None
        returns: 1 - player 1 wins, 2 - player 2 wins, 0 no player has won
    */
    const checkIfWin = () => {
        // 8 methods of winning, 2 players can win
        // player 1
        const winMapP1 = {
            ...(board[0][0] == 1 && board[1][1] == 1 && board[2][2] == 1 && { diagonalLeft: true }),
            ...(board[2][2] == 1 && board[1][1] == 1 && board[0][0] == 1 && { diagonalRight: true }),
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
        const winMapP2 = {
            ...(board[0][0] == 2 && board[1][1] == 2 && board[2][2] == 2 && { diagonalLeft: true }),
            ...(board[2][2] == 2 && board[1][1] == 2 && board[0][0] == 2 && { diagonalRight: true }),
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

        return 0
    }

    const getBoardState = () => {
        return board
    }

    const getPlayerID = () => {
        return playerID
    }

    return { fillSquare, checkIfWin, clearBoard, getBoardState, getPlayerID }
})();


let winner = 0

while(winner == 0){
    console.log("player: " + game.getPlayerID());
    let x = prompt("Row: ");
    let y = prompt("Col: ");

    game.fillSquare(x,y)
    console.log(game.getBoardState())
    winner = game.checkIfWin()
}

console.log("Winner: Player " + winner )
