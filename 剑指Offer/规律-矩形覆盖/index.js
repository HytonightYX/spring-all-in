/**
 * 本质还是斐波那契。
 * 
 * 如果第一次横着放，那么剩下的子问题就是 f(n - 1)
 * 如果第一次竖着放，那么剩下的子问题就是 f(n - 2)
 * 于是 f(n) = f(n - 1) + f(n - 2)
 * 
 * 这里直接用斐波那契的最优解法
 * @complexity O(n) | O(1)
 */
function rectCover(number) {
  if (number <= 2) return number
  let pre = 1, sum = 2

  for (let i = 3; i <= number; i++) {
    sum = sum + pre
    pre = sum - pre
  }
  return sum
}