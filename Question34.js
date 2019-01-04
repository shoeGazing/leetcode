/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let ret = [-1, -1];
    let start = 0;
    let end = nums.length -1;
    while(start < end){
        let mid = Math.floor((start+end)/2);
        if(nums[mid] < target)
            start = mid + 1;
        else
            end = mid;
    }
    if(nums[start] !== target) return ret;
    ret[0] = start;
    end = nums.length - 1;
    for(let i = 0; i < nums.length; i++){
        let mid = Math.floor((start+end)/2)+1;
        if(nums[mid] > target) 
            end = mid - 1;
        else
            start = mid;
            
    }
    ret[1] = end;
    return ret;
};