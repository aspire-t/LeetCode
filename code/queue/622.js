// 622. 设计循环队列
// 需要继续优化，速度比较慢
/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  // 用来保存数据长度为k的数据结构
  this.list = Array(k)
  // 队首指针
  this.front = 0
  // 队尾的指针
  this.rear = 0
  // 队列的长度
  this.max = k
}

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
// 向循环队列插入一个元素。如果成功插入则返回真。
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) {
    return false
  } else {
    this.list[this.rear] = value
    this.rear = (this.rear + 1) % this.max // 循环队列的重点，就是这个指针的位置要取余
    return true
  }
}

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
// 从循环队列中删除一个元素。如果成功删除则返回真。
MyCircularQueue.prototype.deQueue = function () {
  let v = this.list[this.front]
  this.list[this.front] = undefined
  if (v !== undefined) {
    this.front = (this.front + 1) % this.max // 循环队列的重点，就是这个指针的位置要取余
    return true
  } else {
    return false
  }
}

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.list[this.front] === undefined) {
    return -1
  } else {
    return this.list[this.front]
  }
}

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  // if (this.isEmpty()) return -1
  // let rear = this.rear - 1
  // return this.list[rear < 0 ? this.max - 1 : rear] // 如果队尾的指针指向0位置，要做判断

  let rear = this.rear - 1
  if (this.list[rear < 0 ? this.max - 1 : rear] === undefined) {
    return -1
  } else {
    return this.list[rear < 0 ? this.max - 1 : rear]
  }
}

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.rear === this.front && !this.list[this.rear]
}

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.rear === this.front && this.list[this.rear]
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// [null,true,6,6,true,true,5,true,-1,false,false,false]
var circularQueue = new MyCircularQueue(6) // 设置长度为 3

circularQueue.enQueue(6) // 返回 true

circularQueue.Rear() // 返回 6

circularQueue.Rear() // 返回 6

circularQueue.deQueue() // 返回 false，队列已满

circularQueue.enQueue(5) // 返回 3

circularQueue.Rear() // 返回 true

circularQueue.deQueue() // 返回 true

circularQueue.front() // 返回 true

circularQueue.enQueue() // 返回 4

circularQueue.enQueue() // 返回 4

circularQueue.enQueue() // 返回 4