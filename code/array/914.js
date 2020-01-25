// 914. 卡牌分组
// export default (arr) => {
var hasGroupsSizeX = function (arr) {
  // 存储每张卡牌的总数
  let group = []
  let tmp = {}
  // 统计每个相同字符的数量
  arr.forEach(item => {
    tmp[item] = tmp[item] ? tmp[item] + 1 : 1
  })
  // Object.values 用于取出有效值，可以去除undefined
  for (let v of Object.values(tmp)) {
    group.push(v)
  }
  // 此时group已经存放的是每张牌的总数了（数组只遍历一遍，避免了排序和正则的耗时）

  // 求两个数的最大公约数
  let gcd = (a, b) => {
    if (b === 0) {
      return a
    } else {
      // 递归求最大公约数
      return gcd(b, a % b)
    }
  }

  while (group.length > 1) {
    let a = group.shift() // shift 取数组第一个值
    let b = group.shift()

    let v = gcd(a, b)
    if (v === 1) {
      return false
    } else {
      group.unshift(v)
    }
  }
  return group.length ? group[0] > 1 : false
}

hasGroupsSizeX([1, 1, 1, 1, 2, 2, 2, 2, 2, 2])