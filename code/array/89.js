// 89. 格雷编码
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  let make = (n) => {
    if (n === 0) return ['0']
    if (n === 1) return ['0', '1']

    let prev = make(n - 1)
    let result = []
    let max = Math.pow(2, n) - 1
    // console.log(prev)
    for (let i = 0, len = prev.length; i < len; i++) {
      result[i] = `0${prev[i]}`
      result[max - i] = `1${prev[i]}`
    }
    return result
  }
  return make(n).map(item => parseInt(item, 2))
}

console.log(grayCode(3))

var grayCode2 = function (n) {
  if (n === 0) {
    return [0]
  }

  if (n === 1) {
    return [0, 1]
  }
  let formerGrayCode = grayCode(n - 1)
  console.log(formerGrayCode)
  return [
    ...formerGrayCode,
    ...formerGrayCode.reverse().map(v => v + Math.pow(2, n - 1))
  ]
}
console.log(grayCode2(3))