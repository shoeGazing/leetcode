/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let res = nums.map(num => num.toString())
                  .sort((a,b) => parseInt(b+a) - parseInt(a+b))
                  .reduce((prev,curr) => prev += curr);
    return res.charAt(0) == '0'?'0':res;
};