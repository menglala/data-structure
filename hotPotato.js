// 击鼓传花(丢手绢)
function Queue() {
  let items = []
  // this.items = items
  this.enqueue = function(item) {
    items.push(item)
  }
  this.dequeue = function() {
    return items.shift()
  }
  this.front = function() {
    return items[0]
  }
  this.isEmpty = function() {
    return items.length === 0
  }
  this.sizes = function() {
    return items.length
  }
  this.print = function() {
    console.log(items.toString())
  }
}

function hotPotato(nameList, num) {
  let queue = new Queue()
  let out = ''
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }
  while (queue.sizes() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    out = queue.dequeue()
    console.log(out, '被淘汰了')
  }
  return queue.dequeue()
}
let people = ['a', 'v', 'b', 'sd', 'sdsd']
console.log(hotPotato(people, 2))
