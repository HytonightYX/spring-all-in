/**
 * 递归的优化
 * 用一个数组暂存结果
 * 
 * @complexity O(n) | O(n)
 */
function Fibonacci(n) {
  if (n <= 1) return n
  let ret = [0, 1]
  for (let i = 2; i <= n; i++) {
    ret.push(ret[i - 1] + ret[i - 2])
  }

  return ret[n]
}

/**
 * 极致优化
 * 只存储两个值
 * 
 * @complexity O(n) | O(1)
 */
function Fibonacci(n) {
  if (n <= 1) return n

  let sum = 1
  let pre = 0
  for (let i = 2; i <= n; i++) {
    sum = sum + pre
    pre = sum - pre
  }

  return sum
}