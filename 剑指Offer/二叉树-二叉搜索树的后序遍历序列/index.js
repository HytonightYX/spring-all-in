/**
 * 递归方法
 * 
 * 以标准的完美二叉搜索树为例，递归的每一层
 * 都涉及到对序列的遍历，虽然层数越深节点越
 * 少（少了子树的根节点），但是这种减少是微
 * 不足道的，即使是到了最底层，依旧有n/2的
 * 节点（完美二叉树第i层节点数是其上所有节
 * 点数之和+1），因此递归方法在每一层的遍
 * 历开销是O(n)，而对于二叉树而言，递归的
 * 层数平均是O(logn)，因此，递归方法的最终
 * 复杂度是O(n*logn)
 * 
 * @complexity O(n*logn)
 */
function VerifySquenceOfBST(sequence) {
  if (!sequence || sequence.length <= 0) return false
  let len = sequence.length
  let root = sequence[len - 1]

  let idx = 0
  for (let i = 0; i < len - 1; i++) {
    if (sequence[i] < root) idx++
    else break
  }

  for (let j = idx; j < len - 1; j++) {
    if (sequence[j] > root) continue
    return false
  }

  let left = true, right = true
  if (idx > 0) {
    left = VerifySquenceOfBST(sequence.slice(0, idx))
  }

  if (idx < len - 1) {
    right = VerifySquenceOfBST(sequence.slice(idx, len - 1))
  }

  return left && right
}

/**
 *  非递归，采用递归思想
 * 非递归也是一个基于递归的思想：
 * 左子树一定比右子树小，因此去掉根后，数字分为left，right两部分，right部分的
 * 最后一个数字是右子树的根他也比左子树所有值大，因此我们可以每次只看有子树是否符合条件
 * 即可，即使到达了左子树左子树也可以看出由左右子树组成的树还想右子树那样处理
 * 对于左子树回到了原问题，对于右子树，左子树的所有值都比右子树的根小可以暂时把他看出右子树的左子树
 * 只需看看右子树的右子树是否符合要求即可
 * 
 */
function VerifySquenceOfBST(sequence) {
  if (!sequence || sequence.length <= 0) return false
  let len = sequence.length
  let idx = 0
  while (--len) {
    while (sequence[idx] < sequence[len]) idx++
    while (sequence[idx] > sequence[len]) idx++
    if (idx < len) return false
    idx = 0
  }
  return true
}

