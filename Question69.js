/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let low = 0;
    let high = x;
    while(low < high){
        let mid = Math.floor(low + (high-low)/2);
        if(mid*mid == x) return mid;
        if(mid*mid > x) high = mid -  1;
        if(mid*mid < x && (mid+1)*(mid+1) > x) return mid;
        low = low + 1;
    }
     return low;
 };