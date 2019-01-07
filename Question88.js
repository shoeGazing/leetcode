/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let p1 = m-1;
    let p2 = m+n-1;
    while(nums2.length > 0){
        if(nums1[p1] > nums2[nums2.length-1]){
            nums1[p2] = nums1[p1];
            p1--;
        }else{
            nums1[p2] = nums2.pop();
        }
        p2--;
    }
 };