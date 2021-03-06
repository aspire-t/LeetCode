// 93. 复原IP地址

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (str) {
  // 保存所有符合条件的IP地址
  let r = []
  // 分四步递归处理ip分段
  let search = (cur, sub) => {
    // 非法输入过滤，LeetCode测试用例(111111111111111111111111111111111111111111111111111111111111)
    if (sub.length > 12) {
      return
    }
    // 边界条件
    if (cur.length === 4 && cur.join('') === str) {
      r.push(cur.join('.'))
    } else {
      // 正常的处理过程
      for (let i = 0, len = Math.min(3, sub.length), tmp; i < len; i++) {
        tmp = sub.substr(0, i + 1)
        if (tmp - 256 < 0) {
          // 转换下数据类型，如 01为1（LeetCode测试用例）
          search(cur.concat([tmp * 1]), sub.substr(i + 1))
        }
      }
    }
  }
  search(r, str)
  return r
}
// console.log(restoreIpAddresses('25525511135'))

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses2 = function (s) {
  let result = []

  function helper(s, last, segments) {
    if (segments === 3) {
      if (s.length <= 3 && parseInt(s.slice(0, 3)) <= 255) {
        if (s.length >= 2 && s.charAt(0) === '0') {
          return
        }
        let item = last.concat(s)
        result.push(item)
        return
      }
    }
    if (segments < 3) {
      let item = last.concat(s.slice(0, 1)).concat('.')
      helper(s.slice(1), item, segments + 1)
      if (s.charAt(0) !== '0') {
        item = last.concat(s.slice(0, 2)).concat('.')
        helper(s.slice(2), item, segments + 1)
        if (parseInt(s.slice(0, 3)) <= 255) {
          item = last.concat(s.slice(0, 3)).concat('.')
          helper(s.slice(3), item, segments + 1)
        }
      }
    }
  }
  helper(s, '', 0)
  return result
}

console.log(restoreIpAddresses2('25525511135'))