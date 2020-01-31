/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 方法一 使用sort
var findKthLargest = function (nums, k) {
  return nums.sort((a, b) => b - a)[k - 1]
}

// console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6]))
// 方法二：本质是冒泡排序
var findKthLargest2 = function (nums, k) {
  let len = nums.length - 1
  for (let i = len; i > len - k; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        // let temp = nums[j + 1]
        // nums[j] = nums[j + 1]
        // nums[j + 1] = temp
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
  }
  console.log(nums)
  // 返回的是倒数第K个
  return nums[nums.length - k]
}

console.log(findKthLargest2([3, 2, 1, 5, 6, 4], 2))

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 方法三：二分查找
只能用于解决整数数组。

思路：
// ①先找出数组中的最大值和最小值

// ②取其中间值，注意取整。

// ③用两个计数器分别记录数组中大于等于中间值的个数和大于中间值的个数，然后其中那个大于等于的count1 >=k && count2<k则表示mid就是那个值。

// ④否则就继续看是多了还是少了。

var findKthLargest = function (nums, k) {
  const len = nums.length;
  let vmax = nums[0];
  let vmin = nums[0];
  for (let i = 0; i < len; i++) {
    vmax = Math.max(nums[i], vmax);
    vmin = Math.min(nums[i], vmin);
  }
  while (vmin <= vmax) {
    let mid = vmin + Math.round((vmax - vmin) / 2);
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < len; i++) {
      if (nums[i] >= mid) count1++;
      if (nums[i] > mid) count2++;
    }
    // 这里不能用count1 - count2来判断
    if (count1 >= k && count2 < k) return mid;
    if (count1 < k) {
      vmax = mid - 1;
    } else {
      vmin = mid + 1;
    }
  }
  return -1;
};