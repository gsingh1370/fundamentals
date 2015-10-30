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