let Queue = (function() {
  let _items = new WeakMap()
  class Queue {
    constructor() {
      _items.set(this, [])
    }
    enqueue(item) {
      let items = _items.get(this)
      items.push(item)
    }
    dequeue() {
      let items = _items.get(this)
      return items.shift()
    }
    front() {
      let items = _items.get(this)
      return items[0]
    }
    isEmpty() {
      let items = _items.get(this)
      return items.length === 0
    }
    size() {
      let items = _items.get(this)
      return items.length
    }
    print() {
      let items = _items.get(this)
      console.log(items.toString())
    }
  }
  return Queue
})()
