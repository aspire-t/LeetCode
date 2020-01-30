/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = []

  if (numRows == 0) {
    return result
  }

  result.push([1])

  for (let i = 1; i < numRows; i++) {
    const lastRow = result[i - 1] // 上一行的值
    const row = []

    row.push(1)

    for (let j = 1; j < i; j++) {
      row.push(lastRow[j - 1] + lastRow[j])
    }

    row.push(1)
    result.push(row)
  }

  return result
}
console.log(generate(2))