/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let lut = {};
    for(let i = 0; i < nums.length; i++) {
        let goal = target - nums[i];
        if(lut[goal] == undefined) {
            lut[nums[i]] = i;
        } else {
            return[lut[goal],i];
        }
    }
  };