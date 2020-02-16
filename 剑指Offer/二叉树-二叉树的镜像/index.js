function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

/**
 * 思路很简单，秒了
 */
function Mirror(root) {
  if (!root) return null

  let temp = root.left
  root.left = root.right
  root.right = temp

  Mirror(root.left)
  Mirror(root.right)

  return root
}