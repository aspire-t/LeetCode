// 17. 电话号码的字母组合

export default digits => {
// var digits = (digits) => {
  // 建立电话号码键盘映射
  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  // 把输入字符串按单字符分隔变成数组，234=>[2,3,4]
  let num = digits.split('')
  let code = []
  if (num.length == 0) {
    return []
  }
  // 保存键盘映射后的字母内容，如 23=>['abc','def']
  num.map((item) => {
    if (map[item]) {
      code.push(map[item])
    }
  })
  // console.log(code)
  if (code.length > 1) {
    let arr1 = code[0]
    for (let i = 1; i < code.length; i++) {
      // 两两组合
      arr1 = getDigits(arr1, code[i])
    }
    return arr1
  } else {
    return code[0].split('')
  }
}

var getDigits = (arr1, arr2) => {
  let temp = []
  for (let i = 0; i < arr1.length; i++) {
    for (let k = 0; k < arr2.length; k++) {
      let res = arr1[i] + arr2[k]
      temp.push(res)
    }
  }
  return temp
}
// console.log(digits('2'))