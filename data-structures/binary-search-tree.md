Binary Search Trees
===================

Some important attributes of binary search trees:

* BST keys must be unique—no duplicates
* BST keys must be comparable (a < b < c)
* O(log(n)) worst-case performance requires the tree to be balanced—that is, the tree has the minimum possible depth for its leaf nodes

## Ordering Invariant

At the core of binary search trees is the ordering invariant.
Ordering Invariant. At any node with key k in a binary search
tree, all keys of the elements in the left subtree are strictly less
than k, while all keys of the elements in the right subtree are
strictly greater than k.

This implies that no key occurs more than once in a tree, and we have to
make sure our insertion function maintains this invariant.

If our binary search tree were perfectly balanced, that is, had the same
number of nodes on the left as on the right for every subtree, then the ordering
invariant would ensure that search for an element with a given key
has asymptotic complexity O(log(n)), where n is the number of elements
in the tree. Why? When searching for a given key k in the tree, we just
compare k with the key k
0 of the entry at the root. If they are equal, we
have found the entry. If k < k0 we recursively search in the left subtree, and
if k
0 < k we recursively search in the right subtree. This is just like binary
search, except that instead of an array we traverse a tree data structure.

## Performance

A binary search tree is a data structure that can provide O(log(n)) worst-case complexity for element insertion, search and deletion.

How do BSTs accomplish this O(log(n)) performance? By doing two things: (1) maintaining the ordering invariant—at any node n in the tree with key k, all keys of the elements in n's left subtree are strictly less than k, while all keys of the elements in n's right subtree are strictly greater than *k*, and (2) keeping the tree's max height to a minimum—by staying balanced.

## References
* https://www.youtube.com/watch?v=V_3BM0ykITM
* https://www.cs.cmu.edu/~wlovas/15122-r11/lectures/17-bst.pdf?
* https://khan4019.github.io/front-end-Interview-Questions/bst.html
* https://en.wikipedia.org/wiki/Binary_search_tree
