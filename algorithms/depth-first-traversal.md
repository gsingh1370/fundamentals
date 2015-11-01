Depth-first Traversal
=====================

Depth-first traversal is a method for walking through a tree or graph where you go as deep as possible down a path before "fanning out." Your set of visited nodes will shoot out from the starting point along one path, with more single paths progressively shooting off of that one as each path hits a dead end.

Depth-first search or DFS uses depth-first traversal to search for something in a tree or graph.

Depth-first traversal is often compared with breadth-first traversal.

## Advantages:

Depth-first traversal on a binary tree generally requires less memory than breadth-first.
Depth-first traversal can be easily implemented with recursion.

## Disadvantages

A DFS doesn't necessarily find the shortest path to a node, while breadth-first search does.


## Pre-order (root before)

Visit each node before recursively visiting its children., left to right. Root visited first. 

```
class SibTreeNode
{
    public void preorder()
    {
        this.visit();
        
        if (firstChild != null 
        {
            firstChild.preorder();
        }
        
        if (nextSibling != null) 
        {
            nextSibling.preorder();
        }
    }
}
```

 Each node visited only once, so a preorder traversal takes O(n) time, where n is # of nodes in tree.

1. Visit (e.g., print or modify) the root.
2. Traverse the left subtree pre-order.
3. Traverse the right subtree pre-order.

## In-order (root in the middle)

__Only for binary trees__

Visit left child, then node itself, then right child. 

            +
    *               ^
3       7       4       2

Preorder: +*37^42
Inorder: 3*7+4^2
Postorder: 37*42^4

1. Traverse the left subtree in-order.
2. Visit the root.
3. Traverse the right subtree in-order.

## Post-order (root after)

Visit each node's children (left-to-right) before the node itself.

```
public void postorder()
{
    if (firstChild != null)
    {
        firstChild.postorder();
    }
    this.visit();
    if (nextSibling != null)
    {
        nextSibling.postoder();
    }
}
```

Natural way to sum total disk space.

1. Traverse the left subtree post-order.
2. Traverse the right subtree post-order.
3. Visit the root.


## Level-order traversal

Visit root, then all depth-1 nodes (left-to-right), then all depth-2 nodes, etc.

"+*^3742"

Not recursive.

Use a queue; which initially contains only the root. Repeat 
* Dequeue a node
* Visit it
* Enqueue its children from left-to-right

Repeat until queue is empty

+ * ^ 3 7 4 2



## Time and Space

These traversal methods visit each node only once—O(n) time complexity.

In terms of space, the recursive (and most iterative) solutions require space on the call stack, to the tune of O(tree height). In a balanced tree, that space complexity will be O(log n). 

