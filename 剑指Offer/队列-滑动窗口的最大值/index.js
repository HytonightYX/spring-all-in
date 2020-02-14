
/**
 * https://github.com/ConardLi/awesome-coding-js/blob/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%88%86%E7%B1%BB/%E6%A0%88%E5%92%8C%E9%98%9F%E5%88%97/%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3%E7%9A%84%E6%9C%80%E5%A4%A7%E5%80%BC.md
 */
var maxSlidingWindow = function (nums, k) {
  const window = []
  const result = []

  if (nums === null || nums.length < 1 || k < 1) {
    return result
  }

  for (let i = 0; i < nums.length; i++) {
    if (i - window[0] > k - 1) {
      window.shift()
    }
    let j = window.length - 1
    while (j >= 0 && nums[window[j]] <= nums[i]) {
      j--
      window.pop()
    }
    window.push(i)
    if (i >= k - 1) {
      result.push(nums[window[0]])
    }
  }
  return result
}

let maxInWindows = maxSlidingWindow