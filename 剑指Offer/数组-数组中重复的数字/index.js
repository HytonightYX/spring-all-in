/**
 * 数组中重复的数字
 *
 * 在一个长度为n的数组里的所有数字都在0到n-1的范围内。
 * 数组中某些数字是重复的，但不知道有几个数字是重复的。
 * 也不知道每个数字重复几次。请找出数组中任意一个重复
 * 的数字。 例如，如果输入长度为7的数组{2,3,1,0,2,5,3}，
 * 那么对应的输出是第一个重复的数字2。
 */


/**
 * 第一个思路，占坑位
 * 
 * 因为数字范围是 n - 1 的，那就代表每个数的“坑位”就那么一个，
 * 例如遍历遇到了 2, 如果本身就占着 2 号坑，那就没事。
 * 如果不是，那就请他去 2 号坑。但是发现 2 号坑被 另一个 2 给占了，
 * OK，那 2 就是重复的。
 * 
 * @complexity O(n) | O(1)
 */
function duplicate(numbers, duplication) {
  for (let i = 0; i < numbers.length; i++) {
    let curr = numbers[i]
    // 自己占了正确的坑位，跳过
    if (curr === i) continue

    if (numbers[curr] !== curr) {
      // 交换两数
      numbers[i] = numbers[i] + numbers[curr]
      numbers[curr] = numbers[i] - numbers[curr]
      numbers[i] = numbers[i] - numbers[curr]
    } else {
      // 坑被人占了吧，出列！
      duplication[0] = curr
      return true
    }
  }

  return false
}