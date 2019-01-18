/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    if(s == null || s.length == 0) return false;
    let dp = [];
    for(let i = 0; i < s.length; i++){
        dp.push(false);
        for(let j = 0; j <= i; j++){
            if(wordDict.indexOf(s.substring(j,i+1)) !== -1 && (dp[j-1] || j == 0)){
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length-1];
};