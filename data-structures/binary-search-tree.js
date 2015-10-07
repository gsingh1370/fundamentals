function BinaryTree() {
  this.root = null;
}

function Node(value) {
  this.value = value;

  this.left   = null;
  this.right  = null;
}

BinaryTree.prototype.insert = function(value) {
    if ( ! this.root ) {
      this.root = new Node(value);
      return;
    }

    var currentNode = this.root;
    var newNode = new Node(value);

    while (currentNode) {
      if (value < currentNode.value) {
        if ( ! currentNode.left ) {
          newNode.parent = currentNode;
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if ( ! currentNode.right ) {
          newNode.parent = currentNode;
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
};

BinaryTree.prototype.find = function(value) {
  var currentNode = this.root;

  while (currentNode) {
    if (value < currentNode.value) {
      currentNode = currentNode.left
    } else if (value > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      return currentNode;
    }
  }

  return null;
};

Node.prototype.inOrderTraversal = function(visitor) {
  if (this.left) {
    this.left.inOrderTraversal(visitor);
  }

  visitor(this.value);

  if (this.right) {
    this.right.inOrderTraversal(visitor);
  }
};

Node.prototype.min = function() {
  var currentNode = this;

  while (currentNode) {
    if (currentNode.left) {
      currentNode = currentNode.left;
    } else {
      return currentNode;
    }
  }
};

BinaryTree.prototype.min = function() {
  if ( ! this.root ) {
    return null;
  }

  var currentNode = this.root;

  while (currentNode) {
    if (currentNode.left) {
      currentNode = currentNode.left;
    } else {
      return currentNode;
    }
  }
};

BinaryTree.prototype.max = function() {
  if ( ! this.root ) {
    return null;
  }

  var currentNode = this.root;

  while (currentNode) {
    if (currentNode.right) {
      currentNode = currentNode.right;
    } else {
      return currentNode;
    }
  }
};

BinaryTree.prototype.remove = function(value) {
  var node = this.find(value);

  if ( ! node ) {
    return null;
  }

  var childCount = (node.left ? 1: 0) + (node.right ? 1: 0);

  switch (childCount) {
    case 0:
      if (node.value < node.parent.value) {
        node.parent.left = null;
      } else {
        node.parent.right = null;
      }

      break;

    case 1:
      if (node.value < node.parent.value) {
        node.parent.left = (node.left ? node.left : node.right);
      } else {
        node.parent.right = (node.left ? node.left : node.right);
      }

      break;

    case 2:
      var x = node.right.min();


      break;
  }
};

BinaryTree.prototype.isBST = function(node, min, max) {
  if ( ! node ) {
    return true;
  }

  if (node.value < min || node.value > max) {
    return false;
  }

  return this.isBST(node.left, min, node.value) &&
      this.isBST(node.right, node.value, max);
};