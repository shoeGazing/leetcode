/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    if(n == 0) return 0;
    let res = 0;
    for(let i = 0; i < 32; i++){
        res <<= 1;
        if(n&1) res++;
        n >>= 1;
    }
    return res >>> 0;
};