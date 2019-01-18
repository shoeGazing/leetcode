/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let fuel = [];
    let start = 0;
    let sum  = 0;
    for(let i = 0; i < gas.length; i++){
        fuel[i] = gas[i] - cost[i];
        sum += fuel[i];
        if(sum < 0) {
            start = i+1;
            sum = 0;
        }
    }
     if(start == gas.length) return -1;
     let res = start;
     sum  = 0;
     for(let i = 0; i < gas.length; i++){
         if(start+i == gas.length) start = -i;
         sum += fuel[i+start];
         if(sum < 0) return -1;
     }
     return res;
 };