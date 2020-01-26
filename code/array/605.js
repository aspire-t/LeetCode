// 605. 种花问题

var canPlaceFlowers = function (flowerbed, n) {
  let count = 0
  // 右边界补充[0,0,0],最后一块地能不能种只取决于前面的是不是1，所以默认最后一块地的右侧是0
  flowerbed.push(0)
  for (let i = 0; i < flowerbed.length - 1; i++) {
    if (flowerbed[i] === 0) {
      if (i == 0 && flowerbed[1] === 0) {
        count++
        i++
      } else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
        count++
        i++
      }
    }
    // 小优化，如果数量已经超过了，可以提前跳出
    if (count >= n) {
      return true
    }
  }

  return count >= n
};

console.log(canPlaceFlowers([0, 1, 0], 1))