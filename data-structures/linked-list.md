Linked List
===========

A linked list is a data structure in which objects are arranged in a linear order. While arrays maintain a linear ordering through its indices, linked lists store their ordering with a pointer field next in each object.

The simple singly-linked list consists of nodes with two fields:

1. A key
2. A pointer next to the next node, or to NIL if it's the tail node

Doubly linked lists add one more field: a pointer to the previous node, often named prev.

![Image of Doubly Linked List](http://i.imgur.com/ZhCKI.png)

The linked-list itself often keeps track of the head node and provides various operations:

* search(key) - O(n) - which returns the found node with that key or NIL if not found
* insert(x) - O(1) - which splices node x onto the front of the list
* delete(x) - O(1) - which splices node x out of the list. Assuming the list is doubly-linked, this is usually done by re-setting the pointers of x's prev and next elements to point to each other
* delete(key) - O(n) - which runs the O(n) search(key) then the O(1) delete(x)

## Variations

1. Single or double - if a list is singly-linked, there is only a next pointer. If it is doubly-linked, there are both prev and next pointers.
2. Sorted or unsorted - a sorted linked list maintains an ordering of node keys
3. Circular - a list in which the next pointer of the list's tail element points to the head element
4. Separate classes for lists and nodes (as described above) or just nodes - sometimes defining a linked list Node class is all you'll need for an interview question, so it's unnecessary to go through the trouble of defining a List class

## Resources

* http://www.cs.cornell.edu/courses/cs2110/2011fa/Lectures/L06-Lists/L06-Lists.pdf