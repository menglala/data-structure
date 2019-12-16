// 十进制转二进制
function divideBy2(number) {
  let remStack = new Stack()
      rem = ''
      result = ''
  while (number > 0) {
    rem = Math.floor(number % 2)
    remStack.push(rem)
    number = Math.floor(number / 2)
  }
  while (!remStack.isEmpty()) {
    result += remStack.pop().toString()
  }
  return result
}                                                                                                                                                                                                       
// console.log(divideBy2(10)); //1010
