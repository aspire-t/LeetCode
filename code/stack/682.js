// 682. 棒球比赛

/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let result = []
  ops.forEach(item => {
    switch (item) {
      case 'C':
        if (result.length) {
          result.pop()
        }
        break;
      case 'D':
        if (result.length) {
          let pre1 = result.pop() - 0
          result.push(pre1, pre1 * 2)
        }
        break;
      case '+':
        if (result.length) {
          let pre1 = result.pop() - 0
          let pre2 = result.pop() - 0
          result.push(pre2, pre1, pre1 + pre2)
        }
        break;
      default:
        result.push(item - 0)
        break;
    }
  })
  // let val = 0
  // result.map(item => {
  //   val += item - 0
  // })
  // return val
  return result.reduce((total, num) => {
    return total + num
  })
}

console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]))