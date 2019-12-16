// 任意进制转换
function baseConverter(num, base) {
  let remStack = new Stack()
  rem = ''
  digits = '0123456789ABCDEF'
  result = ''

  while (num > 0) {
    rem = Math.floor(num % base)
    remStack.push(rem)
    num = Math.floor(num / base)
  }
  while (!remStack.isEmpty()) {
    result += digits[remStack.pop()]
  }
  return result
}

console.log(baseConverter(100,16));

