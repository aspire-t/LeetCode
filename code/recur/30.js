// 30. 串联所有单词的子串
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
// 方法一，移动窗口，最基本的方法（暴力解法）
var findSubstring = function (s, words) {
  if (words.length === 0) return []

  var isMatch = function (w_str, words_str, L) {
    const arr = []
    for (let i = 0; i < w_str.length; i += L) {
      arr.push(w_str.substr(i, L))
    }
    return arr.sort().join('') === words_str
  }

  // 移动窗口的方法
  const L = words[0].length
  const WS = L * words.length
  const r = []
  const words_str = words.sort().join('')
  for (let w_start = 0; w_start <= s.length - WS; w_start++) {
    const w_str = s.substr(w_start, WS)
    if (isMatch(w_str, words_str, L)) {
      r.push(w_start)
    }
  }
  return r
}

// console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]))
// 方法二：本质还是移动窗口的方法，但是优化了比较的方法
var findSubstring2 = function (s, words) {
  if (words.length === 0) return []
  const L = words[0].length
  const words_map = {}

  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    if (words_map[word]) {
      words_map[word]++
    } else {
      words_map[word] = 1
    }
  }

  // const WS = L * words.length
  const r = [] // 存储结果
  // 因为开始位置不一样，所以，要根据单次的长度，来做循环
  // 比如：单次长度为3，就要做3次循环
  for (let i = 0; i < L; i++) {

    let m = {}
    let w_start = i
    let pos = w_start // 在窗体中的遍历指针
    let num = 0
    // s.length - L * words.length 微优化，遍历的次数，不需要完全遍历完
    while (w_start <= s.length - L * words.length) { // 推动窗口不停的往前走
      // 比较循环
      for (; pos < w_start + L * words.length; pos += L) {
        const word = s.substr(pos, L)
        if (!words_map[word]) {
          // 情况2：发现不匹配
          w_start += L
          pos = w_start
          num = 0
          m = {}
          break
        }
        // 正常情况走这里
        if (m[word]) {
          m[word]++
        } else {
          m[word] = 1
        }
        num++

        if (m[word] > words_map[word]) {
          // 情况3：发现多余匹配
          let k = 0
          while (true) {
            const d_word = s.substr(w_start + k, L)
            k += L
            m[d_word]--
            num--
            if (d_word === word) {
              break
            }
          }
          pos += L
          w_start += k
          break
        }
      }

      if (num === words.length) {
        // 情况1：窗口向前移动
        const lastWord = s.substr(w_start, L)
        m[lastWord]--
        num--
        r.push(w_start)
        w_start += L
      }
    }
  }

  return r
}

console.log(findSubstring2("barfoothefoobarman", ["foo", "bar"]))

// 串联所有单词的子串

// 思路
// 输入：
// s = "barfoothefoobarman",
// words = ["foo","bar"]

// 第一步：遍历 words 的每一个元素，以 word 为起点切割 s，得到切割后的片段数组 allValues = ['foothe'、'foobar'、'barfoo'、'barman']。

// 第二步：遍历 allValues 的每一个元素，对每个元素进行切割（如：'foobar' 切割成 ['foo', 'bar']），接着对元素数组进行排序（如：['foo', 'bar'] 排序成 ['bar', 'foo']）,然后用 join 方法合成字符串，最后得到 valuesHadSorts = ['foothe'、'barfoo'、'barfoo'、'barman']。

// 第三步：对 words 进行排序，然后把排序后的 words 用 join 方法组合成字符串 w。

// 第四步：遍历 valuesHadSorts 的每一个元素，判断是否等于 w，相等则获取它们的 index。

var findSubstring3 = function (s, words) {
  const findIndexs = (str, p) => {
    var positions = []
    var pos = str.indexOf(p)

    while (pos > -1) {
      positions.push(pos)
      pos = str.indexOf(p, pos + 1)
    }
    return positions
  }

  const getValues = (s, word, sliceLength) => {
    let arr = []
    let indexs = findIndexs(s, word)

    indexs.forEach((index) => {
      if (index !== -1) {
        let leftStrEnd = index + word.length
        let leftStrStart = leftStrEnd - sliceLength
        if (leftStrStart >= 0 && leftStrEnd <= s.length) {
          let leftStr = s.substring(leftStrStart, leftStrEnd)
          arr.push(leftStr)
        }
      }
    })
    return arr
  }

  const getAllValues = (s, words) => {
    let values = []
    let wordSets = [...new Set(words)]
    for (let i = 0; i < wordSets.length; i++) {
      values = values.concat(getValues(s, wordSets[i], words.length * words[0].length))
    }
    return [...new Set(values)]
  }

  const isMatch = (value, words) => {
    let arr = []
    let v = value.slice()
    let len = words[0].length

    while (v) {
      arr.push(v.substring(0, len))
      v = v.substring(len)
    }
    return arr.sort().join('') === words.sort().join('')
  }

  if (!s || words.length === 0 || s.length < words.length * words[0].length) return []

  let arr = []
  const values = getAllValues(s, words)

  values.forEach((item) => {
    if (isMatch(item, words)) {
      arr = arr.concat(findIndexs(s, item))
    }
  })
  return arr
};