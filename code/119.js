/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// 杨辉三角
var getRow = function (rowIndex) {
  if (rowIndex == 0) {
    return [1]
  }

  let result = []
  for (let i = 1; i < rowIndex + 1; i++) {
    const lastRow = result // 上一行的值
    const row = []

    row.push(1)

    for (let j = 1; j < i; j++) {
      row.push(lastRow[j - 1] + lastRow[j])
    }

    row.push(1)
    result = row
  }

  return result
}

console.log(getRow(5))