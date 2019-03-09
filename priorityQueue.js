//最小优先队列(优先级越大,数字越小)
function PriorityQueue() {
  let items = []
  function QueueElement(el, priority) {
    this.element = el
    this.priority = priority
  }
  this.pushElement = function(el, priority) {
    let item = new QueueElement(el, priority)
    let hasAdded = false
    for (let i = 0; i < items.length; i++) {
      if (item.priority < items[i].priority) {
        items.splice(i, 0, item)
        hasAdded = true
        break // break跳出for循环
      }
    }
    if (!hasAdded) {
      items.push(item)
    }
  }
  this.print = function() {
    for (let i = 0; i < items.length; i++) {
      console.log(`${items[i].element}-${items[i].priority}`)
    }
  }
}
// let queue = new PriorityQueue()
// queue.pushElement('a', 10)
// queue.pushElement('s', 0)
// queue.pushElement('d', 2)
// queue.pushElement('c', 5)
// queue.print()
