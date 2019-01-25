/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let p1 = 0;
    let p2 = 0;
    for(let i = 0; i < nums.length; i++){
        let temp = p1;
        p1 = Math.max(p2+nums[i], p1);
        p2 = temp;
    }
    return p1;
};