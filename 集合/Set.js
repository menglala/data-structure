function Set() {
  let items = {}

  this.has = function (val) {
    // 1.in操作符
    // return val in items;
    return items.hasOwnProperty(val)
  }

  this.add = function (val) {
    if (!this.has(val)) {
      items[val] = val
      return true
    }

    return false
  }

  this.remove = function (val) {
    if (this.has(val)) {
      delete items[val]
      return true
    }
    return false
  }

  this.clear = function () {
    items = {}
  }

  this.size = function () {
    return Object.keys(items).length
  }

  this.values = function () {
    let keys = Object.keys(items)
    let values = []

    for (let i = 0; i < keys.length; i++) {
      values.push(items[keys[i]])
    }

    return values
  }

  // 并集
  this.union = function (otherSet) {
    let unionSet = new Set()
    let values = this.values()
    let otherValues = otherSet.values()

    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i])
    }

    for (let i = 0; i < otherValues.length; i++) {
      unionSet.add(otherValues[i])
    }

    return unionSet
  }

  // 交集
  this.intersection = function (otherSet) {
    let intersectionSet = new Set()
    let values = this.values()

    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i])
      }
    }

    return intersectionSet
  }

  // 差集
  this.difference = function (otherSet) {
    let intersectionSet = new Set()
    let values = this.values()

    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        intersectionSet.add(values[i])
      }
    }

    return intersectionSet
  }

  // 子集
  this.subset = function (otherSet) {
    const values = this.values();
    if (this.size() >= otherSet.size()) {
      return false
    } else {
      for (let i = 0; i < values.length; i++) {
        if (!otherSet.has(values[i])) {
          return false
        }
      }

      return true
    }
  }
}

let set = new Set()
let otherSet = new Set()
set.add(1)
set.add(2)
set.add(3)
set.add(6)
otherSet.add(1)
otherSet.add(2)
otherSet.add(3)
otherSet.add(4)
otherSet.add(5)
otherSet.add(6)
otherSet.add(7)
let union = set.union(otherSet)
let intersection = set.intersection(otherSet)
console.log(union.values())
console.log(intersection.values())
console.log(set.subset(otherSet))
