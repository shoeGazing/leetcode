/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if(board.length ==0) return;
   for(let i = 0; i < board.length; i++){
       mark(board,i,0);
       mark(board,i,board[0].length-1);
   }
    for(let j = 1; j < board[0].length-1; j++){
       mark(board,0,j);
       mark(board,board.length-1,j);
   }   
   for(let i = 0; i < board.length; i++){
       for(let j = 0; j <board[0].length; j++){
           if(board[i][j] == 'O') board[i][j] = 'X';
           if(board[i][j] == '#') board[i][j] = 'O';
       }
   }
    
};

let mark = function(board,i,j){
    if(i < 0 || i > board.length-1 || j < 0 || j > board[0].length-1) return;
    if(board[i][j] !== 'O') return;
    board[i][j] = '#';
    mark(board,i-1,j);
    mark(board,i+1,j);
    mark(board,i,j-1);
    mark(board,i,j+1);
}