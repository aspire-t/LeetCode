// export default (array) => {
var test = function (array) {
  // 冒泡排序（倒序）
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      let temp = array[j]
      if (temp > array[j + 1]) {
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}

console.log(test([1, 9, 5, 3, 4]))