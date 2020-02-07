// 621. 任务调度器

// 方法一
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

// console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C'], 2))

// 方法二
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval2 = function (tasks, n) {
  let q = 0
  // 对归类进行存储
  let Q = {}

  tasks.forEach(item => {
    if (Q[item]) {
      Q[item]++
    } else {
      Q[item] = 1
    }
  })

  let keys = Object.keys(Q)
  let arr = []
  for (let i = 0; i < keys.length; i++) {
    arr.push(Q[keys[i]])
  }
  arr.sort((a, b) => b - a)
  let maxNum = arr[0]

  q = (maxNum - 1) * (n + 1) + 1
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
      break
    } else {
      q++
    }
  }
  // while (true) {
  //   let keys = Object.keys(Q)
  //   if (!keys[0]) {
  //     q = q - (n + 1) + len
  //     break
  //   }
  //   q += (n + 1)
  //   // console.log('q_________' + q)
  //   // console.log(keys)
  //   for (let i = 0; i < (n + 1); i++) {
  //     len = keys.length
  //     console.log(len)
  //     if (!Q[keys[i]]) {
  //       break
  //     }
  //     Q[keys[i]]--
  //     // console.log('Q_____________________' + Q[keys[i]])
  //     if (Q[keys[i]] === 0) {
  //       delete Q[keys[i]]
  //     }
  //   }
  // }
  // console.log(q)
  // 最后这一步是对 n为0 的处理
  return Math.max(tasks.length, q)
}
console.log(leastInterval2(["A", "A", "A", "B", "B", "B"], 0))
// console.log(leastInterval2(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2))
// console.log(leastInterval2(
//   ["G", "C", "A", "H", "A", "G", "G", "F", "G", "J", "H", "C", "A", "G", "E", "A", "H", "E", "F", "D", "B", "D", "H", "H", "E", "G", "F", "B", "C", "G", "F", "H", "J", "F", "A", "C", "G", "D", "I", "J", "A", "G", "D", "F", "B", "F", "H", "I", "G", "J", "G", "H", "F", "E", "H", "J", "C", "E", "H", "F", "C", "E", "F", "H", "H", "I", "G", "A", "G", "D", "C", "B", "I", "D", "B", "C", "J", "I", "B", "G", "C", "H", "D", "I", "A", "B", "A", "J", "C", "E", "B", "F", "B", "J", "J", "D", "D", "H", "I", "I", "B", "A", "E", "H", "J", "J", "A", "J", "E", "H", "G", "B", "F", "C", "H", "C", "B", "J", "B", "A", "H", "B", "D", "I", "F", "A", "E", "J", "H", "C", "E", "G", "F", "G", "B", "G", "C", "G", "A", "H", "E", "F", "H", "F", "C", "G", "B", "I", "E", "B", "J", "D", "B", "B", "G", "C", "A", "J", "B", "J", "J", "F", "J", "C", "A", "G", "J", "E", "G", "J", "C", "D", "D", "A", "I", "A", "J", "F", "H", "J", "D", "D", "D", "C", "E", "D", "D", "F", "B", "A", "J", "D", "I", "H", "B", "A", "F", "E", "B", "J", "A", "H", "D", "E", "I", "B", "H", "C", "C", "C", "G", "C", "B", "E", "A", "G", "H", "H", "A", "I", "A", "B", "A", "D", "A", "I", "E", "C", "C", "D", "A", "B", "H", "D", "E", "C", "A", "H", "B", "I", "A", "B", "E", "H", "C", "B", "A", "D", "H", "E", "J", "B", "J", "A", "B", "G", "J", "J", "F", "F", "H", "I", "A", "H", "F", "C", "H", "D", "H", "C", "C", "E", "I", "G", "J", "H", "D", "E", "I", "J", "C", "C", "H", "J", "C", "G", "I", "E", "D", "E", "H", "J", "A", "H", "D", "A", "B", "F", "I", "F", "J", "J", "H", "D", "I", "C", "G", "J", "C", "C", "D", "B", "E", "B", "E", "B", "G", "B", "A", "C", "F", "E", "H", "B", "D", "C", "H", "F", "A", "I", "A", "E", "J", "F", "A", "E", "B", "I", "G", "H", "D", "B", "F", "D", "B", "I", "B", "E", "D", "I", "D", "F", "A", "E", "H", "B", "I", "G", "F", "D", "E", "B", "E", "C", "C", "C", "J", "J", "C", "H", "I", "B", "H", "F", "H", "F", "D", "J", "D", "D", "H", "H", "C", "D", "A", "J", "D", "F", "D", "G", "B", "I", "F", "J", "J", "C", "C", "I", "F", "G", "F", "C", "E", "G", "E", "F", "D", "A", "I", "I", "H", "G", "H", "H", "A", "J", "D", "J", "G", "F", "G", "E", "E", "A", "H", "B", "G", "A", "J", "J", "E", "I", "H", "A", "G", "E", "C", "D", "I", "B", "E", "A", "G", "A", "C", "E", "B", "J", "C", "B", "A", "D", "J", "E", "J", "I", "F", "F", "C", "B", "I", "H", "C", "F", "B", "C", "G", "D", "A", "A", "B", "F", "C", "D", "B", "I", "I", "H", "H", "J", "A", "F", "J", "F", "J", "F", "H", "G", "F", "D", "J", "G", "I", "E", "B", "C", "G", "I", "F", "F", "J", "H", "H", "G", "A", "A", "J", "C", "G", "F", "B", "A", "A", "E", "E", "A", "E", "I", "G", "F", "D", "B", "I", "F", "A", "B", "J", "F", "F", "J", "B", "F", "J", "F", "J", "F", "I", "E", "J", "H", "D", "G", "G", "D", "F", "G", "B", "J", "F", "J", "A", "J", "E", "G", "H", "I", "E", "G", "D", "I", "B", "D", "J", "A", "A", "G", "A", "I", "I", "A", "A", "I", "I", "H", "E", "C", "A", "G", "I", "F", "F", "C", "D", "J", "J", "I", "A", "A", "F", "C", "J", "G", "C", "C", "H", "E", "A", "H", "F", "B", "J", "G", "I", "A", "A", "H", "G", "B", "E", "G", "D", "I", "C", "G", "J", "C", "C", "I", "H", "B", "D", "J", "H", "B", "J", "H", "B", "F", "J", "E", "J", "A", "G", "H", "B", "E", "H", "B", "F", "F", "H", "E", "B", "E", "G", "H", "J", "G", "J", "B", "H", "C", "H", "A", "A", "B", "E", "I", "H", "B", "I", "D", "J", "J", "C", "D", "G", "I", "J", "G", "J", "D", "F", "J", "E", "F", "D", "E", "B", "D", "B", "C", "B", "B", "C", "C", "I", "F", "D", "E", "I", "G", "G", "I", "B", "H", "G", "J", "A", "A", "H", "I", "I", "H", "A", "I", "F", "C", "D", "A", "C", "G", "E", "G", "E", "E", "H", "D", "C", "G", "D", "I", "A", "G", "G", "D", "A", "H", "H", "I", "F", "E", "I", "A", "D", "H", "B", "B", "G", "I", "C", "G", "B", "I", "I", "D", "F", "F", "C", "C", "A", "I", "E", "A", "E", "J", "A", "H", "C", "D", "A", "C", "B", "G", "H", "G", "J", "G", "I", "H", "B", "A", "C", "H", "I", "D", "D", "C", "F", "G", "B", "H", "E", "B", "B", "H", "C", "B", "G", "G", "C", "F", "B", "E", "J", "B", "B", "I", "D", "H", "D", "I", "I", "A", "A", "H", "G", "F", "B", "J", "F", "D", "E", "G", "F", "A", "G", "G", "D", "A", "B", "B", "B", "J", "A", "F", "H", "H", "D", "C", "J", "I", "A", "H", "G", "C", "J", "I", "F", "J", "C", "A", "E", "C", "H", "J", "H", "H", "F", "G", "E", "A", "C", "F", "J", "H", "D", "G", "G", "D", "D", "C", "B", "H", "B", "C", "E", "F", "B", "D", "J", "H", "J", "J", "J", "A", "F", "F", "D", "E", "F", "C", "I", "B", "H", "H", "D", "E", "A", "I", "A", "B", "F", "G", "F", "F", "I", "E", "E", "G", "A", "I", "D", "F", "C", "H", "E", "C", "G", "H", "F", "F", "H", "J", "H", "G", "A", "E", "H", "B", "G", "G", "D", "D", "D", "F", "I", "A", "F", "F", "D", "E", "H", "J", "E", "D", "D", "A", "J", "F", "E", "E", "E", "F", "I", "D", "A", "F", "F", "J", "E", "I", "J", "D", "D", "G", "A", "C", "G", "G", "I", "E", "G", "E", "H", "E", "D", "E", "J", "B", "G", "I", "J", "C", "H", "C", "C", "A", "A", "B", "C", "G", "B", "D", "I", "D", "E", "H", "J", "J", "B", "F", "E", "J", "H", "H", "I", "G", "B", "D"], 1))



var leastInterval3 = function (tasks, n) {
  let map = new Map();
  // 遍历计算所有任务出现的次数
  for (let i = 0; i < tasks.length; i++) {
    if (map.has(tasks[i])) {
      map.set(tasks[i], map.get(tasks[i]) + 1);
    } else {
      map.set(tasks[i], 1);
    }
  }
  // 对次数进行递减排序
  let arr = [...map.values()].sort((a, b) => b - a);
  let maxNum = arr[0];
  let res = (maxNum - 1) * (n + 1) + 1;
  let i = 1;
  while (i < arr.length && arr[i] === maxNum) {
    // 如果存在其他任务的出现次数跟最大次数相同
    res++;
    i++;
  }
  return Math.max(tasks.length, res)
};