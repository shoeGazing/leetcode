/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let dp = [];
    let n = s.length;
     for(let i = 0; i < n; i++){
         dp[i] = 0;
     }
     dp[n] = 1;
     dp[n-1]= s.charAt(n-1) == 0 ? 0:1;
     for(let i = n-2; i >= 0; i--){
         if(s.charAt(i) == '0') continue;
         dp[i] = (parseInt(s.substring(i,i+2) <=26? dp[i+1]+dp[i+2]:dp[i+1]));
     }
     return dp[0];
 };