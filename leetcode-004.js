// leetcode 004
// language: js
// https://leetcode.com/problems/median-of-two-sorted-arrays/
// author: yujin19
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const mergeSort = [...nums1, ...nums2].sort((a, b) => a - b);

  return mergeSort.length % 2 === 0
    ? (mergeSort[mergeSort.length / 2 - 1] + mergeSort[mergeSort.length / 2]) /
        2
    : mergeSort[Math.floor(mergeSort.length / 2)];
};
