
/**
 * 快速幂
 * 
 * 是一个在 O(logn) 的时间内计算 a^n 的小技巧，而暴力的计算需要 O(n) 的时间
 */
function Power(x, n) {
  let ans = 1
  let tmp = x
  let flag = 0

  if (n < 0) {
    flag = 1
    n *= -1
  }

  while (n) {
    if (n & 1) {
      ans *= tmp
    }
    tmp *= tmp
    n >>>= 1
  }
  return flag ? 1 / ans : ans
}