/**
 * 快排思想
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }

  const partition = (arr, left, right) => {
    let pivot = arr[right]
    let i = left - 1
    for (let j = left; j < right; j++) {
      if (arr[j] < pivot) {
        i++
        swap(arr, i, j)
      }
    }

    swap(arr, i + 1, right)
    return i + 1
  }

  const selectK = (nums, left, right, k) => {
    if (left === right) return nums[left]
    let pos = partition(nums, left, right)
    if (pos === nums.length - k) return nums[pos]
    if (pos < nums.length - k) return selectK(nums, pos + 1, right, k)
    if (pos > nums.length - k) return selectK(nums, left, pos - 1, k)

    return -1
  }

  return selectK(nums, 0, nums.length - 1, k)
}

// 桶排思想
var findKthLargest = function (nums, k) {
  let buckets = []
  nums.forEach(num => {
    buckets[num] = buckets[num] ? buckets[num] + 1 : 1
  })
  for (let i = buckets.length - 1; i >= 0; i--) {
    if (buckets[i]) {
      k -= buckets[i]
      if (k <= 0) return i
    }
  }
  return -1
}
