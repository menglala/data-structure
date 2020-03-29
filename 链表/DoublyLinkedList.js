function DoublyLinkedList() {
  function Node(element) {
    this.element = element
    this.next = null
    this.prev = null
  }

  let length = 0
  let head = null
  let tail = null

  /**
   *@params element：要添加的元素
   *@return 无
   **/
  this.append = function(element) {
    let node = new Node(element)
    let current = head

    if (!current) {
      head = node
    } else {
      while (current.next) {
        current = current.next
      }

      current.next = node
      node.prev = current;
    }

    length++
  },
  /**
   *@params position:要插入元素的位置，element：要插入的元素
    *@return true：插入成功；false:插入失败
    **/
  this.insert = function(position, element) {
    let node = new Node(element)

    if (position >= 0 && position <= length) {
      let current = head
      let previous = null
      let index = 0

      if (position === 0) {
        if (!head) {
          head = node
          tail = node
        } else {
          node.next = current
          current.prev = node
          head = node
        }
      } else {
        if (index < position) {
          previous = current
          current = current.next
          index++
        }
        previous.next = node
        current.prev = node
        node.next = current
        node.prev = previous
      }

      length++
      return true
    } else {
      return false
    }
  },
  /**
   *@params position:删除元素的位置
   *@return 删除的元素
   *三种情况1.删除头节点2.删除中间节点3.删除尾节点
  * */
  this.remove = function(position) {
    if (position > -1 && position < length) {
      let index = 0
      let current = head
      let previous = null

      if (position === 0) {
        head = current.next

        if(length === 1){
          tail = head;
        } else {
          head.prev = null
        }
      } else if(position === length - 1){
        current = tail
        tail = current.prev
        tail.next = null
      } else {
        if (index < position) {
          previous = current
          current = current.next
          index++
        }
        previous.next = current.next
        current.next.prev = previous
      }

      length--
      return current.element
    }

    return null
  },

  this.isEmpty = function() {
    return length === 0
  },

  this.size = function() {
    return length
  },

  this.toString = function() {
    let current = head
    let string = ''

    while (current) {
      string += current.element + (current.next ? '\n' : '')
      current = current.next
    }

    return string
  },

  this.indexOf = function(element) {
    let current = head
    let index = 0

    while (current) {
      if (current.element === element) {
        return index
      }
      current = current.next
      index++
    }

    return -1
  },
  
  this.getHead = function() {
    return head
  }
}
