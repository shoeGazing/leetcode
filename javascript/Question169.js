/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let res = nums[0];
    let count = 1;
    for(let i = 1; i < nums.length; i++){
        if(count == 0){
            res = nums[i];
            count++;
        }else if(nums[i] == res){
            count++;
        }else{
            count--;
        }
    }
    return res;
};