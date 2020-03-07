// https://github.com/mqyqingfeng/Blog/issues/52
/**
 * 这种实现方式需要额外的空间用来储存左右子集
 */
function quickSort(arr) {
  if (arr.length <= 1) return arr

  let pivotIndex = arr.length >> 2

  // 拿出并删除元数组中 pivotIndex 处的元素
  let pivot = arr.splice(pivotIndex, 1)[0]
  console.log(pivot, arr)
  let left = []
  let right = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat([pivot], quickSort(right))
}

function quickSort(arr) {
  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }

  const partition = (arr, left, right) => {
    // pivot (Element to be placed at right position)
    let pivot = arr[right]

    let i = left - 1

    for (let j = left; j < right; j++) {
      // 如果当前元素 < pivot
      if (arr[j] < pivot) {
        // 较小元素的值 + 1
        i++
        swap(arr, i, j)
      }
    }

    swap(arr, i + 1, right)
    return i + 1
  }

  const sort = (arr, left, right) => {
    if (left < right) {
      let storeIndex = partition(arr, left, right)
      sort(arr, left, storeIndex - 1)
      sort(arr, storeIndex + 1, right)
    }
  }

  sort(arr, 0, arr.length - 1)
  return arr
}

console.log(quickSort([10, 80, 30, 90, 40, 50, 70]))

/*
arr[] = {10, 80, 30, 90, 40, 50, 70}
Indexes:  0   1   2   3   4   5   6

left = 0, right =  6, pivot = arr[right] = 70
Initialize index of smaller element, i = -1

Traverse elements from j = left to right-1
j = 0 : Since arr[j] <= pivot, do i++ and swap(arr[i], arr[j])
i = 0
arr[] = {10, 80, 30, 90, 40, 50, 70} // No change as i and j
                                     // are same

j = 1 : Since arr[j] > pivot, do nothing
// No change in i and arr[]

j = 2 : Since arr[j] <= pivot, do i++ and swap(arr[i], arr[j])
i = 1
arr[] = {10, 30, 80, 90, 40, 50, 70} // We swap 80 and 30

j = 3 : Since arr[j] > pivot, do nothing
// No change in i and arr[]

j = 4 : Since arr[j] <= pivot, do i++ and swap(arr[i], arr[j])
i = 2
arr[] = {10, 30, 40, 90, 80, 50, 70} // 80 and 40 Swapped
j = 5 : Since arr[j] <= pivot, do i++ and swap arr[i] with arr[j]
i = 3
arr[] = {10, 30, 40, 50, 80, 90, 70} // 90 and 50 Swapped

We come out of loop because j is now equal to right-1.
Finally we place pivot at correct position by swapping
arr[i+1] and arr[right] (or pivot)
arr[] = {10, 30, 40, 50, 70, 90, 80} // 80 and 70 Swapped

Now 70 is at its correct place. All elements smaller than
70 are before it and all elements greater than 70 are after
it.
 */