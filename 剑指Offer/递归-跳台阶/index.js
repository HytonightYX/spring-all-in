/**
 * 找规律还是个斐波那契嘛
 * 
 */
function jumpFloor(n) {
  if (n <= 2) return n

  let sum = 2
  let pre = 1
  for (let i = 3; i <= n; i++) {
    sum = sum + pre
    pre = sum - pre
  }

  return sum
}

/**
 * 正规解法是 DP
 * 首先可知，第一阶有只能一步，一种；，第二阶可以两次一步、一次两步两种
 *
 * 若楼梯阶级 n = 3
 * 跳 2 步到 3：剩下的是第一步没跳，起始跳到第一步只有一种
 * 跳 1 步到 3：剩下的是第二步没跳，起始跳到第二步有两种
 * 通过分类讨论，问题规模就减少了:
 *
 * 若楼梯阶级 n = n
 * 跳 2 步到 n：剩下的是第 n - 2 步没跳，起始跳到第 n - 2 步设它为 pre2 种
 * 跳 1 步到 n：剩下的是第 n - 1 步没跳，起始跳到第 n - 1 步设它为 pre1 种
 * 同时可以发现第 n 阶的解法，只要用到 n - 1 和 n - 2 阶是多少，其他的不用考虑，因此用两个变量临时存下来即可
 *
 * 公式是：dp(i) = dp(i-2) + dp(i-1)
 */
function jumpFloor(number) {
  if (number <= 2) return number
  let pre2 = 1, pre1 = 2
  for (let i = 3; i <= number; i++) {
    let cur = pre2 + pre1
    pre2 = pre1
    pre1 = cur
  }
  return pre1
}