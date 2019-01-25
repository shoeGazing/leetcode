/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let flagArr = [];
    let res = 0;
    for(let i = 2; i < n; i++){
        if(flagArr[i] == undefined){
            flagArr[i] = 1;
            res++;
        }
        let j = 2;
        while(i*j < n){
          flagArr[i*j] = 0;
          j++;
        }
    }
    return res;
};