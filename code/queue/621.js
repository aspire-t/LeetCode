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
  // 最后这一步是对 n为0 的处理
  return Math.max(tasks.length, q)
}
console.log(leastInterval2(["A", "A", "A", "B", "B", "B"], 0))
// console.log(leastInterval2(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2))

// 方法三：
// 方法三和方法二的思路相同,是方法二的优化
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
}

// 思路：
// 最短时间会有两种情况：

// 执行过程中没有待命的情况发生，即所有任务连续执行，没有停顿，那么最短时间即为任务总数
// 执行过程中出现了待命状态，那么最短时间需要将待命状态计算在内。
// 执行完所有任务的最短时间是跟数量最多的那个种类的任务的数量相关的，即假设在["A","A","A","B","B"]，数量最多的任务是A，数量是3，那么执行完所有的任务最少需要(3-1)*(n+1)+1，推广到所有用例中，假设数量最多的任务的数量为x，那么最短时间至少为(x-1)*(n+1)+1。

// 首先考虑第一种情况：

// 当任务的种类数大于冷却时间n时，说明两个任务之间的间隔一定会被填满，则此时对应第一种情况，最短时间即为任务总数。

// 然后是第二种情况：

// 考虑数量第二多的任务，假设数量第二多的任务的数量小于x，那么在两个相同任务的间隔内即可插满。

// 如果等于x，那么最后一个任务跟在数量最多的任务最后一次执行后，即最短时间加1。

// 依次往下类推。