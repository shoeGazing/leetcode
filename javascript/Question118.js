/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [];
    for(let i = 0; i < numRows; i++){
        let temp = [];
        temp[0] = 1;
        temp[i] = 1;
        let last = res[i-1];
        for(let j = 1; j <i; j++){
            temp[j] = last[j] + last[j-1]
        }
        res[i] = temp;
    }
        return res;
 };