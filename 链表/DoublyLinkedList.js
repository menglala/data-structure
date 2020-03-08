function DoublyLinkedList() {
  function Node(element) {
    this.element = element
    this.next = null
  }

  let length = 0
  let head = null

  /**
   *@params element：要添加的元素
   *@return 无
   **/
  ;(this.append = function(element) {
    let node = new Node(element)
    let current = head
    console.log(element, current)

    if (!current) {
      head = node
    } else {
      while (current.next) {
        current = current.next
      }

      current.next = node
    }

    length++
  }),
    /**
     *@params position:要插入元素的位置，element：要插入的元素
     *@return true：插入成功；false:插入失败
     **/
    (this.insert = function(position, element) {
      let node = new Node(element)

      if (position >= 0 && position <= length) {
        let current = head
        let previous = null
        let index = 0

        if (position === 0) {
          node.next = current
          head = node
        } else {
          if (index < position) {
            previous = current
            current = current.next
            index++
          }
          previous.next = node
          node.next = current
        }

        length++
        return true
      } else {
        return false
      }
    }),
    /**
     *@params position:删除元素的位置
     *@return 删除的元素
     * */
    (this.remove = function(position) {
      if (position > -1 && position < length) {
        let index = 0
        let current = head
        let previous = null

        if (position === 0) {
          head = current.next
        } else {
          if (index < position) {
            previous = current
            current = current.next
            index++
          }
          previous.next = current.next
        }

        length--
        return current.element
      }

      return null
    }),
    (this.isEmpty = function() {
      return length === 0
    }),
    (this.size = function() {
      return length
    }),
    (this.toString = function() {
      let current = head
      let string = ''

      while (current) {
        string += current.element + (current.next ? '\n' : '')
        current = current.next
      }

      return string
    }),
    (this.indexOf = function(element) {
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
    }),
    (this.getHead = function() {
      return head
    })
}
