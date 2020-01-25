// // 696. 计数二进制子串
// var match = function (str) {
//   for (let i = 1; i < str.length; i++) {
//     if (str[0] != str[i]) {
//       return str.slice(0, (i) * 2)
//     }
//   }
//   return 0
// }

// var countBinarySubstrings = function (s) {
//   let arr = []
//   for (let i = 0; i < s.length - 1; i++) {
//     let res = match(s.slice(i))
//     console.log(res)
//     if (res) {
//       arr.push(res)
//     }
//   }
//   return arr.length
// };

// console.log(countBinarySubstrings('10101'))
// console.log(countBinarySubstrings('00110'))

let countBinarySubstrings = function (s) {
  let n = 0,
    pre = 0,
    curr = 1
  for (let i = 0, len = s.length; i < len - 1; i++) {
    if (s[i] == s[i + 1]) {
      curr++
    } else {
      pre = curr
      curr = 1
    }
    if (pre >= curr) n++
  }
  return n
}
console.log(countBinarySubstrings('00110'))