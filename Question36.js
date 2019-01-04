/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let hash = new Set();
     for(let i = 0; i < 9; i++){
         for(let j = 0; j < 9; j++){
             let number = board[i][j];
             if(number !== '.'){
                 if(hash.has(number + 'in row' + i) || 
                    hash.has(number + 'in column' + j) ||
                    hash.has(number + 'in board' + Math.floor(i/3) + '-' + Math.floor(j/3)))
                     return false;
                    hash.add(number + 'in row' + i);
                    hash.add(number + 'in column' + j);
                    hash.add(number + 'in board' + Math.floor(i/3) + '-' + Math.floor(j/3));
             }
         }
     }
     return true;
 };