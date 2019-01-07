/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function(board, word) {
    for(let i = 0; i < board.length;i++){
        for(let j = 0; j < board[0].length;j++){
            if(board[i][j] == word[0]){
                if(checkMatch(i,j,0)) return true;
            }
        }
    }
   return false;
   function checkMatch(i,j,symbolPos){
       if(i < 0 || j <0 || i >= board.length || j >= board[0].length || board[i][j] !== word[symbolPos]) return false;
       board[i][j] = '#';
       let newPos = symbolPos + 1;
       if(word.length == newPos) return true;
       if(checkMatch(i,j-1,newPos) || checkMatch(i-1,j,newPos) || checkMatch(i+1,j,newPos) || checkMatch(i,j+1,newPos)) 
           return true;
       else{
           board[i][j] = word[symbolPos];
           return false;
       }
   }
};

