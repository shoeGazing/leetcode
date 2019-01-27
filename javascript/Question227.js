/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    if(s == null || s.length == 0) return 0;
    let sign = '+';
    let res = 0;
    let stack = [];
    let num = 0;
    for(let i = 0; i < s.length; i++){
        if(s.charAt(i).match(/^[0-9]+$/) !== null){
            num = num*10+(s.charAt(i)-'0');
        }
        if(s.charAt(i).match(/^[0-9]+$/) == null && s.charAt(i) !== ' ' || i == s.length-1){
            if(sign == '+') stack.push(num);
            if(sign == '-') stack.push(-num);
            if(sign == '*') stack.push(stack.pop()*num);
            if(sign == '/') stack.push(Math.trunc(stack.pop()/num));
            num = 0;
            sign = s.charAt(i);
        }
    }
    for(let i of stack) res += i;
    return res;
};