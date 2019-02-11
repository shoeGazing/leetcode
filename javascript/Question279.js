/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let memo = [];
    memo[0] = 0;
    memo[1] = 1;
    memo[2] = 2;
    memo[3] = 3;
    for(let i = 4; i <= n ; i++){
        memo[i] = memo[i-1] + 1;
        for(let j = 1; j*j <= i; j++){
            memo[i] = Math.min(memo[i], memo[i-j*j]+1);
        }
    }
    return memo[n];
};