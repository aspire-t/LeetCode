// 621. 任务调度器

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  // 表示最终队列执行的结果
  let q = ''
  // 对归类进行存储
  let Q = {}
  tasks.forEach(item => {
    if (Q[item]) {
      Q[item]++
    } else {
      Q[item] = 1
    }
  })

  while (true) {
    let keys = Object.keys(Q)
    console.log(keys)
    if (!keys[0]) {
      break
    }

    // 声明一个队列用来存储1+n任务单元
    let temp = []
    for (let i = 0; i <= n; i++) {
      let max = 0
      let key, pos
      keys.forEach((item, index) => {
        if (Q[item] > max) {
          max = Q[item]
          key = item
          pos = index
        }
      })
      if (key) {
        temp.push(key)
        keys.splice(pos, 1)
        Q[key]--
        if (Q[key] < 1) {
          delete Q[key]
        }
      } else {
        break
      }
    }
    q += temp.join('').padEnd(n + 1, '-')
    console.log(q)
  }
  // 边界处理，最后不要出现冷却时间

  q = q.replace(/-+$/g, '')
  return q.length
}

console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2))