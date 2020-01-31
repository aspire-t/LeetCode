/**
 * @param {number[]} A
 * @return {number[]}
 */
// 方法一： 两次遍历
// 思路和算法

// 遍历一遍数组把所有的偶数放进 ans[0]，ans[2]，ans[4]，依次类推。

// 再遍历一遍数组把所有的奇数依次放进 ans[1]，ans[3]，ans[5]，依次类推。

var sortArrayByParityII = function (A) {
  // A.sort((a, b) => a - b)
  // 声明一个空数组用来存储奇偶排序后的数组
  let r = []
  // 记录奇数、偶数下标
  let odd = 1,
    even = 0
  A.forEach(item => {
    if (item % 2 == 1) {
      r[odd] = item
      odd += 2
    } else {
      r[even] = item
      even += 2
    }
  })
  return r
}

console.log(sortArrayByParityII([4, 2, 5, 7]))

// 方法二： 双指针
// 意思就是在找到一个偶数位是奇数的前提下,找奇数位上的偶数,找到之后在交换.
var sortArrayByParityII2 = function (A) {
  let j = 1
  for (let i = 0; i < A.length; i += 2) {
    if (A[i] % 2 === 1) {
      while (A[j] % 2 == 1) j += 2;
      [A[i], A[j]] = [A[j], A[i]]
    }
  }
  return A
}

console.log(sortArrayByParityII2([3, 1, 4, 2]))