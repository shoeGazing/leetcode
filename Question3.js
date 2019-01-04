/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let lut = {};
    let result = 0;
    let left = 0;
    for(let i = 0; i < s.length; i++){
        let char = s[i];
        if(lut[char] !== undefined && lut[char] >=left){
            left = lut[char] + 1;
        }
        lut[char] = i;
        if((i-left+1)>result) result = i-left+1;
    }
     return result;
 };