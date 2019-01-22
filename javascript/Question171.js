/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let res = 0;
    for(let i = 0; i < s.length; i++){
        let code = s.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
        res = res*26 + code;
    }
    return res;
};