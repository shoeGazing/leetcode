/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let t = nums[0];
    let h = nums[0];
    do{
        t = nums[t];
        h = nums[nums[h]];
    }while(t !== h)
    let p1 = nums[0];
    let p2 = h;
    while(p1 !== p2){
        p1 = nums[p1];
        p2 = nums[p2];
    }
    return p1;
};