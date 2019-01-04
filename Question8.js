/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let result = '';
    let index = 0;
    let negative = false;
    let overflow = false;
    while(str[index] == ' '){
        index++;
    }
    if(str[index] == '+' || str[index] == '-'){
        if(str[index] == '-'){
            negative = true;
        }
        index++;
    }
    while(str.charCodeAt(index) >= '0'.charCodeAt(0) && str.charCodeAt(index) <= '9'.charCodeAt(0)){
        result += str[index];
        index++;
    }
    if(result.length == 0) return 0;
    result = parseInt(result);
    if(result > Math.pow(2,31)-1) overflow = true;
    if(negative && overflow) return -Math.pow(2,31);
    if(!negative && overflow) return Math.pow(2,31)-1;
    return negative == true?-result:result;
};