// function Stack() {
//   let items = []
//   this.push = function(el) {
//     items.push(el)
//   }
//   this.pop = function() {
//     return items.pop()
//   }
//   this.peek = function() {
//     return items[items.length - 1]
//   }
//   this.isEmpty = function() {
//     return items.length === 0
//   }
//   this.size = function() {
//     return items.length
//   }
//   this.clear = function() {
//     items = []
//   }
//   this.print = function() {
//     console.log(items)
//   }
// }
// let stack = new Stack()
// console.log(stack.isEmpty()) //true
// stack.push(1)
// stack.push(11)
// stack.push(33)
// console.log(stack.peek()) //33
// stack.push(23)
// console.log(stack.size()) // 4
// console.log(stack.isEmpty()) // false
// stack.print() // 1,11,33,23
// stack.pop()
// stack.pop()
// console.log(stack.size()) // 2
// stack.print() // 1,11

// ES6重写stack类
// // 1.class关键字吃重写 --》 弊端：constructor是基于原型创建的属性和方法，而items只能暴露给stack类的方法访问
// class Stack {
//   constructor() {
//     this.items = []
//   }
//   push(el) {
//     this.item.push(el)
//   }
//   //...其他方法
// }
// let a = new Stack()
// a.items.push(1)
// a.items.push(122)
// a.items.pop()
// console.log(a.items) // 1

// // 2. Symbol作为类的私有属性
// let _items = Symbol()

// class Stack {
//   constructor() {
//     this[_items] = []
//   }
//   push(el) {
//     this[_items].push()
//   }
// }
// let stack = new Stack()
// let _stack = stack
// _stack[_items].push(11)
// _stack[_items].push(22)
// _stack[_items].push(882)
// _stack[_items].pop()
// let objSymbols = Object.getOwnPropertySymbols(_stack) // 获取_stack的symbols属性的集合,是个数组
// console.log(objSymbols.length) //1
// console.log(objSymbols) // [Symbol()]
// console.log(objSymbols[0]) // Symbol()
// _stack[objSymbols[0]].push(333)

// console.log(_stack)

//3.使用ES6的weakMap实现,并用闭包函数将_items包裹在函数内部
let Stack = (function() {
  const _items = new WeakMap()
  class Stack {
    constructor() {
      _items.set(this, [])
    }
    push(item) {
      let items = _items.get(this)
      items.push(item)
    }
    pop() {
      let items = _items.get(this)
      let firstItem = items.pop()
      return firstItem
    }
    print() {
      let items = _items.get(this)
      console.log(items)
    }
    isEmpty() {
      let items = _items.get(this)
      return items.length === 0
    }
    peek() {
      let items = _items.get(this)
      return items[items.length - 1]
    }
    size() {
      let items = _items.get(this)
      return items.length
    }
    clear() {
      let items = _items.get(this)
      items = []
    }
    print() {
      let items = _items.get(this)
      console.log(items)
    }
  }
  return Stack
})()

// let stack = new Stack()
// stack.push(111)
// stack.push(22)
// stack.pop()
// stack.unshift(000) //stack.unshift is not a function
// stack.print()
