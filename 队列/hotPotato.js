// 击鼓传花(丢手绢)
function hotPotato(nameList, num) {
  let queue = new Queue()
  let out = ''
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }
  while (queue.sizes() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue()) // 循环队列
    }
    out = queue.dequeue()
    console.log(out, '被淘汰了')
  }
  return queue.dequeue()
}
let people = ['a', 'b', 'c', 'd', 'e']
console.log(hotPotato(people, 2))
