/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function(nums, k) {
    findKthLargestImpl(nums);
    return nums[nums.length - k];
};

let findKthLargestImpl = function(nums, low = 0, high = nums.length -1){
    if(low >= high) return;
    let pivot = nums[high];
    let insertI = low;
    for(let i = low; i < high; i++){
        if(nums[i] < pivot){
            swap(nums, i, insertI++);
        }
    }
    swap(nums, high, insertI);
    findKthLargestImpl(nums,low, insertI-1);
    findKthLargestImpl(nums,insertI+1,high);
}

let swap = function(nums,i,j){
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

