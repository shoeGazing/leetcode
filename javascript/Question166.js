/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if(numerator == 0) return '0';
    let res = '';
    if(Math.sign(numerator) !== Math.sign(denominator)) res += '-';
    let n = Math.abs(numerator);
    let d = Math.abs(denominator);
    res += Math.floor(n/d);
    n %= d;
    if(n == 0) return res;
    res += '.';
    let map = {};
    while(n !== 0){
        map[n] = res.length;
        n *= 10;
        res += Math.floor(n/d);
        n %= d;
        let i = map[n];
        if(i !== undefined) return res.substring(0,i) + '(' + res.substring(i) + ')';
    }
    return res;
};