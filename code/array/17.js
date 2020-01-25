// 17. 电话号码的字母组合
// 方法一
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
      temp.push(`${arr1[i]}${arr2[k]}`)
    }
  }
  return temp
}

// console.log(digits('23'))

// 方法二
var digits2 = (str) => {
  // 对输入做处理，如果小于1返回空（LeetCode测试用例）
  if (str.length < 1) return []
  // 建立电话号码键盘映射
  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  // 如果只给了一个按键，直接把按键内容取出来并按单个字符分组就可以了（LeetCode测试用例）
  if (str.length < 2) return map[str].split('')
  // 把输入字符串按单字符分隔变成数组，234=>[2,3,4]
  let num = str.split('')
  // 保存键盘映射后的字母内容，如 23=>['abc','def']
  let code = []
  num.forEach(item => {
    if (map[item]) {
      code.push(map[item])
    }
  })
  let comb = (arr) => {
    // 临时变量用来保存前两个组合的结果
    let tmp = []
    // 最外层的循环是遍历第一个元素，里层的循环是遍历第二个元素
    for (let i = 0, il = arr[0].length; i < il; i++) {
      for (let j = 0, jl = arr[1].length; j < jl; j++) {
        tmp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    // 用新生成的数组，替换已经合并好的数组的位置
    arr.splice(0, 2, tmp) // 这个方法的巧妙，就巧妙在这里
    if (arr.length > 1) {
      comb(arr)
    } else {
      return tmp
    }
    return arr[0]
  }
  return comb(code)
}

// console.log(digits2('2'))