## 二维数组中的查找

**O(M + N)**

思路：观察题干，看出对于数组中每一个数，左侧的数字比它小，下方的数字比它大。于是从右上角（左下角同理）开始比较，如果比`target`小，往左移，大，往右移。

```javascript
function Find(target, array) {
  let row = array.length;
  let col = array[0].length;
  let i = 0;
  let j = col - 1;
  while (i < row && j >= 0) {
    if (array[i][j] === target) {
      return true;
    } else if (array[i][j] < target) {
      i++;
    } else {
      j--;
    }
  }
  return false;
}
```

另外，O(N*M) 的就不提了，稍微改进一点点的是对每一行用个二分，复杂度能降低到 O(M * logN)。

## 替换空格

**思路：**这道题本意是考如何处理字符数组中元素移位的情况。因为替换是将 1 个字符替换为 3 个字符，必然需要移动字符。

那么问题来了，如果从前往后遍历，当遇到一个空格，则该空格后面所有字符都要往后移动两位，遇到下一个空格也是如此，那么靠后的几个单词要移动好几次...

但是，换个思路，我们先算出字符串中有几个空格，比如有 n 个吧，然后从后往前遍历字符串

```javascript
function replaceSpace(str) {
  let spaceNum = 0;

  // 计算出空格数量
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") spaceNum++;
  }
}
```

如果用内置函数，有两种方式

```javascript
return str.replace(/ /g, "%20"); // 正则全局替换
return str.split(" ").join("%20");
```

## 从尾到头打印链表

**O(N)**

```javascript
function printListFromTailToHead(head) {
  let arr = [];
  let cur = head;
  while (cur) {
    arr.unshift(cur.val); // 插入到数组的开头
    cur = cur.next;
  }
  return arr;
}
```

## 重建二叉树

O(N)

```javascript
function reConstructBinaryTree(pre, vin) {
  // 判空
  if (!pre || !vin || pre.length === 0 || vin.length === 0) {
    return null;
  }

  let root = pre[0];
  let rootNode = new TreeNode(root);
  if (pre.length === 1) {
    return rootNode;
  }
  let pos = vin.indexOf(root);

  let vinLeft = vin.slice(0, pos);
  let vinRight = vin.slice(pos + 1, vin.length);
  pre.shift();
  let preLeft = pre.slice(0, pos);
  let preRight = pre.slice(pos, pre.length);

  let leftNode = reConstructBinaryTree(preLeft, vinLeft);
  let rightNode = reConstructBinaryTree(preRight, vinRight);

  rootNode.left = leftNode;
  rootNode.right = rightNode;

  return rootNode;
}
```

## 两个栈实现一个队列

```javascript
let inStack = [];
let outStack = [];

function push(node) {
  inStack.push(node);
}

function pop() {
  // 如果2号栈为空，则将1号栈全部推入二号
  if (outStack.length === 0) {
    while (inStack.length > 0) {
      outStack.push(inStack.pop());
    }
  }

  return outStack.pop();
}
```

## 旋转数组的最小数字

**O(N)**

```javascript
function minNumberInRotateArray(rotateArray) {
  if (rotateArray.length === 0) {
    return 0;
  }

  for (let i = 0; i < rotateArray.length; i++) {
    if (rotateArray[i] > rotateArray[i + 1]) {
      return rotateArray[i + 1];
    }
  }

  return rotateArray[0];
}
```
