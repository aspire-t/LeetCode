// 459. 重复的子字符串
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  var reg = /^(\w+)\1+$/
  return reg.test(s)
}

console.log(repeatedSubstringPattern('aba'))
console.log(repeatedSubstringPattern('abcabcabcabc'))
