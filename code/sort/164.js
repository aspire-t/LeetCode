// 这道题还需要看下题解，有很多更好的思路

/**
 * @param {number[]} nums
 * @return {number}
 */
// 传统做法
var maximumGap = function (nums) {
  if (nums.length < 2) return 0

  nums.sort((a, b) => {
    return a - b
  })
  let max = 0 // 用来保存相邻元素的最大差值
  for (let i = 0, len = nums.length - 1; i < len; i++) {
    let temp = nums[i + 1] - nums[i]
    if (temp > max) max = temp
  }
  return max
}

// console.log(maximumGap([1, 10000000]))

var maximumGap2 = function (nums) {
  if (nums.length < 2) return 0
  let max = 0,
    len = nums.length - 1
  for (let i = len; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      let temp = nums[j]
      if (temp > nums[j + 1]) {
        nums[j] = nums[j + 1]
        nums[j + 1] = temp
      }
    }
    // 要从第二轮开始比较，

    if (i < len) {
      let value = nums[i + 1] - nums[i]
      console.log(value)
      if (value > max) max = value
    }
  }
  // 循环不会走 nums[0]，所以最后要进行一次判断
  return Math.max(max, nums[1] - nums[0])
}

console.log(maximumGap2([1, 10000000]))