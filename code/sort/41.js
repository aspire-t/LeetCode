/**
 * @param {number[]} nums
 * @return {number}
 */
// 方法一：正常排序思路
var firstMissingPositive = function (nums) {
  // 过滤
  nums = nums.filter(item => item > 0)
  if (nums.length) {
    // 排序
    nums.sort((a, b) => a - b)
    if (nums[0] !== 1) {
      return 1
    } else {
      // 如果下一个元素和当前元素的差值>1,返回当前元素的值+1
      for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] - nums[i] > 1) {
          return nums[i] + 1
        }
      }
      // 如果数组是连续的正整数，则返回最后一位数的值+1
      return nums.pop() + 1
    }
  } else {
    return 1
  }
}

console.log(firstMissingPositive([1, 2, 0]))

// 方法二：选择排序
var firstMissingPositive2 = function (nums) {
  nums = nums.filter(item => item > 0)
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
      }
    }

    if (i > 0) {
      if (nums[i] - nums[i - 1] > 1) {
        return nums[i - 1] + 1
      }
    } else {
      // 说明nums[i]是最小值
      if (nums[i] !== 1) {
        return 1
      }
    }
  }
  return nums.length ? nums.pop() + 1 : 1
}

console.log(firstMissingPositive2([1, 2, 0]))