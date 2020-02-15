let insertSort = (arr) => {
  let len = arr.length
  if (len <= 1) return arr

  let idx, cur
  for (let i = 1; i < len; i++) {
    idx = i, cur = arr[i]
    while (idx > 0 && arr[idx - 1] > cur) {
      arr[idx] = arr[idx - 1]
      idx--
    }

    arr[idx] = cur
  }
  return arr
}

console.log(myInsert([3, 1, 2, 5, 6, 4, 5, 3, 2, 1]))