// export default (array) => {
var test = function (array) {
  // 选择排序
  for (let i = 0, len = array.length; i < len; i++) {
    let min = array[i]
    for (let j = i + 1; j < len; j++) {
      if (array[j] < min) {
        let temp = min
        min = array[j]
        array[j] = temp
      }
    }
    array[i] = min
  }
  return array
}

console.log(test([1, 9, 5, 3, 4]))