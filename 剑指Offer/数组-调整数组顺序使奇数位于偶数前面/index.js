/**
 * 辅助数组，空间换时间
 * 
 * @complexity O(n) | O(n)
 */
function reOrderarr(arr) {
  if (!arr || arr.length <= 1) return arr

  let odd = []
  let even = []
  arr.map(item => {
    if (item & 1) odd.push(item)
    else even.push(item)
  })

  return [...odd, ...even]
}

/**
 * 去掉辅助数组，优化空间
 * 虽然空间复杂度没变，
 * 但是其实少了一半，例如原数据 1GB，
 * 辅助空间也要1GB，现在可以省掉了
 * 使用了插排的思想
 * 
 * @complexity O(n) | O(n)
 */
function reOrderArray(array) {
  const length = array.length;
  if (!length) {
    return [];
  }

  let i = 0;
  while (i < length) {
    if (array[i] % 2 === 0) {
      // 如果指针i对应的元素是偶数
      // 那么就需要找到其后出现的第一个奇数
      // 然后和指针i的元素进行交换
      let j = i + 1;
      for (; j < length && array[j] % 2 === 0; ++j) { }
      if (j === length) {
        break;
      } else {
        // 整体右移，保证原元素的相对位置不变
        const tmp = array[j];
        for (let k = j; k > i; k--) {
          array[k] = array[k - 1];
        }
        array[i] = tmp;
      }
    }
    i++;
  }

  return array;
}

console.log(reOrderarr([]))