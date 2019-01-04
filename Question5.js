/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let lo = 0;
    let maxLen = 0;
    if(s.length < 2) return s;
       let helper = function(s, j, k){
        while(j >= 0 && k < s.length && s.charAt(j) == s.charAt(k)){
            j--;
            k++;
        }
        if(maxLen < k-j-1){
           lo = j+1;
           maxLen = k-j-1;
        }
    }
    for(let i = 0; i <s.length-1; i++){
        helper(s, i, i);
        helper(s, i, i+1);
    }
 
    return s.substring(lo,maxLen+lo);
};


