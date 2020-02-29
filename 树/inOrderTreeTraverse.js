// 中序遍历
function BinarySearchTree() {
  var Node = function(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };
  var root = null;

  this.insert = function(key) {
    var newNode = new Node(key);

    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
    console.log(root);
  };

  // keys && keys.forEach(key => {
  //   this.insert(key);
  // });

  function insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  }
  console.log(root);

  return root;
}

var tree = new BinarySearchTree();

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  var sortHeights = [...heights];
  sortHeights.sort((a, b) => {
    return a - b;
  });

  var result = 0;
  for (let i = 0; i < heights.length; i++) {
    if (sortHeights[i] !== heights[i]) result++;
  }

  return result;
};

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  const sqrtA = A.map(n => Math.pow(n, 2)).sort((a, b) => a - b);
  return sqrtA;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  const sortNums = nums.sort((a, b) => a - b);

  let sum = 0;
  for (let i = 0; i < sortNums.length / 2; i++) {
    sum += Math.min(sortNums[2 * i], sortNums[2 * i + 1]);
  }

  return sum;
};
var arrayPairSum2 = function(nums) {
  return nums
    .sort((a, b) => a - b)
    .filter((item, index) => index % 2 === 0)
    .reduce((t, i) => t + i);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i === nums[i]) {
      return i;
    }
  }

  return -1
};
console.log(heightChecker([1, 1, 4, 2, 1, 3]));
console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));
console.log(arrayPairSum([1, 4, 3, 2]));
console.log(arrayPairSum2([1, 4, 3, 2]));
console.log(findMagicIndex([0, 2, 3, 4, 5]));
console.log(findMagicIndex([1, 1, 1]));
