/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let low = 0;
    let high = s.length-1;
    s = s.toLowerCase();
    while(low < high){
      if(/[^a-zA-Z0-9]/.test(s[low])){
          low++;
          continue;
      }  
      if(/[^a-zA-Z0-9]/.test(s[high])){
          high--;
          continue;
      } 
      if(s[low] !== s[high]) return false;
        low++;
        high--;
    }
    return true;
};