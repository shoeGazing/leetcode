/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = [];
    if(matrix.length == 0 || matrix == null) return res;
    let c1 = 0;
    let c2 = matrix[0].length-1;
    let r1 = 0;
    let r2 = matrix.length-1;
    while(c1<=c2 && r1<=r2){
        for(let c = c1; c <=c2; c++){
            res.push(matrix[r1][c]);
        }
        for(let r = r1+1; r <=r2; r++){
            res.push(matrix[r][c2]);
        }
        if(c1 < c2 && r1 < r2){
            for(let c = c2-1; c > c1; c--){
                res.push(matrix[r2][c]);
            }
            for(let r = r2; r>r1;r--){
                res.push(matrix[r][c1]);
            }
        }
                c1++;
                r1++;
                r2--;
                c2--;
    }
    return res;
};