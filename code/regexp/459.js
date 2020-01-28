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

/**
 * 解法二：假设字符串由 n 个相同子串组成, 掐头去尾后包含子串 2n - 2, 如果仍然包含原字符串 2n - 2 > n, 解出 n > 2
 * 首先一个字符串t重复N次后得到重复字符串s， 那么s = N * t，那么这样的重复字符串截取t后得到的字符串也是重复字符串。
然后得到s1 = s+s，现在的s1 = 2N * t，有2N个t组成。
现在把s1的前后减去一个字符，那么前后的两个t就不再作为重复子字符串而存在了，此时s1相当于(2N-2)*t，如果此时s1中依然能够找到s，说明s完全由t组成。

举例:
s = abc|abc; // 2abc
s+s = abc|abc|abc|abc; // 4abc
s1 = a|bcabcabcab|c = bcabcabcab; // bc + 2*abc + ab
因为一个重复子字符串删除一个子字符串后依然是重复子字符串。

var repeatedSubstringPattern = function(s) {
  let s1 = (s+s).slice(1, -1);
  return s1.indexOf(s) != -1;
};

var repeatedSubstringPattern = function(s) {
  return (s + s).slice(1, -1).includes(s)
};

*/
