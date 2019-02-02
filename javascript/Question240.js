/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    while(matrix.length > 0){
        if(matrix[0][0] > target) return false;
        for(let j = 0; j < matrix[0].length; j++){
            if(matrix[0][j] > target) break;
            else if(matrix[0][j] == target) return true;
        }
        matrix.shift();
    }
   return false;
};