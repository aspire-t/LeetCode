//557. 反转字符串中的单词 III

export default (str) => {
  //return s.split(/\s/g).map(item => {
  return str.split(' ').map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}
