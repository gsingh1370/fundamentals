Trees
=====

## Rooted Trees

Tree: Set of nodes & edges that connect them

Exactly one path between 2 nodes

Path: Connected sequence of edges

Rooted Tree: One distinguished node is called the root.

Every node c, except root, has one parent p, the first node on path from c to the root. C is p's child. Root has no parent. A node can have any # of children.

## Terminology

* Leaf:  node with no children
* Siblings:  nodes with same parent
* Ancestors of a node d: nodes on path from d to root, including d tself, d's parent, d's grandparent... and so on to the root.
* If some node a is an ancestor of d, then d is _descendant_ of a.
* Length of a path: # of edges in a path
* Depth of node n: length of path from n to the root. (Depth of root iz zero)
* Height of node n: length of path from n to its deepest descendant. (height of any leaf is zero)
* Height of a tree = height of the root
* Subtree rooted at n: tree formed by n and its descendants.
* A binary tree: no node has > 2 children, every child is a left child or a right child, even if its the only child.

## Representing Rooted Trees

G&T : Each node has 3 references: item, parent, children stored in a list.

Another option: siblings are directly linked. 


```
class SibTreeNode
{
    Object item;
    SibTreeNode parent;
    SibTreeNode firstChild;
    SibTreeNode nextSibling;
}

public class SibTree
{
    SibTreeNde root;
    int size; // # of nodes in tree
}
```

## Tree Traversals

Traversal: a manner of visiting each node in a tree once. 




