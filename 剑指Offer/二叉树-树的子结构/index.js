function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function HasSubtree(root1, root2) {
  if (!root1 || !root2) return false
  let result = false

  if (root2 && root2) {
    if (root1.val === root2.val) {
      result = judge(root1, root2)
    }

    if (!result) {
      result = judge(root1.left, root2)
    }

    if (!result) {
      result = judge(root1.right, root2)
    }
  }

  return result
}

function judge(node1, node2) {
  if (!node2) {
    return true
  }

  if (!node1) {
    return false
  }

  if (node1.val !== node2.val) {
    return false
  }

  return judge(node1.left, node2.left) && judge(node1.right, node2.right)
}