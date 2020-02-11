// 给定一个数组A[0,1,...,n-1],
// 请构建一个数组B[0,1,...,n-1],
// 其中B中的元素
// B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。
// 不能使用除法。


/**
 * 
 * 拿到分别算左右两个数组，
 * 最终相乘即可
 * 
 * @complexity O(n) | O(n)
 */
function multiply(arr) {
  let len = arr.length
  if (len === 0) return []

  let ret = []
  let left = [1]
  let right = [1]

  for (let i = 1; i < len; i++) {
    left.push(left[i - 1] * arr[i - 1])
    right.unshift(right[0] * arr[len - i])
  }

  for (let i = 0; i < len; i++) {
    ret.push(left[i] * right[i])
  }

  return ret
}

console.log(multiply([1, 2, 3, 4, 5]))