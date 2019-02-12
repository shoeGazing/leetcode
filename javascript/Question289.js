/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    if(board.length == 0 || board == null) return; 
    let m = board.length;
    let n = board[0].length;
    for(let i = 0 ; i < m; i++){
        for(let j = 0; j < n; j++){
            let lives = neighbor(board, m, n, i, j);
            if(board[i][j] == 1 && (lives == 2 || lives == 3)) board[i][j] = 3;
            if(board[i][j] == 0 && lives == 3) board[i][j] = 2;
        }
    }
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            board[i][j] >>= 1;
        }
    }
};

let neighbor = function(board,m,n,i,j){
    let lives = 0;
    for(let x = Math.max(i-1,0); x <= Math.min(i+1,m-1); x++){
        for(let y = Math.max(j-1,0); y <= Math.min(j+1,n-1); y++){
            lives += board[x][y] & 1;
        }
    }
    lives -= board[i][j] & 1;
    return lives;
}


