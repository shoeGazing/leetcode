/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for(let i = 0, j = matrix.length-1; i < j; i++,j--){
        let temp = matrix[i];
        matrix[i] = matrix[j];
        matrix[j] = temp;
    }
    for(let i = 0; i < matrix.length; i++){
        for(let j = i+1; j < matrix.length; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
};