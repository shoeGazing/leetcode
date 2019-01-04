/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let flag = false;
    let result = 0;
    let digit = 0;
    if(x < 0){
        x = Math.abs(x);
        flag = true;
    }
    while(x !== 0){
        digit = x%10;
        result = result*10+digit;
        x = Math.floor(x/10);
        if(result > (Math.pow(2,31)-1)) return 0;
    }
    
    return result = flag == true?-result:result;
};