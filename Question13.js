/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;
    for(let char of s){
        switch(char){
                case 'I':
                result += 1;
                break;
                case 'V':
                result += 5;
                break;
                case 'X':
                result += 10;
                break;
                case 'L':
                result += 50;
                break;
                case 'C':
                result += 100;
                break;
                case 'D':
                result += 500;
                break;
                case 'M':
                result += 1000;
                break;
        }
    }
    if(s.indexOf('IV') !== -1) result -= 2;
    if(s.indexOf('IX') !== -1) result -= 2;
    if(s.indexOf('XL') !== -1) result -= 20;
    if(s.indexOf('XC') !== -1) result -= 20;
    if(s.indexOf('CD') !== -1) result -= 200;
    if(s.indexOf('CM') !== -1) result -= 200;
    return result;
};