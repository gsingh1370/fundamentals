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

## Lists

Store a list of ints as an array

### Disadvantages

1. Insert item at beginning or middle

-> time proportional to length of array

2. Arrays have a fixed length


## Linked Lists (a recursive data type)

Made up of "nodes"
Each node has
* an item
* a reference to next node in list

```
public class ListNode
{
    int item;
    ListNode next;
}

ListNode l1 = new ListNode(), l2 = new ListNode(), 
l3 = new ListNode();

l1.item = 7;
l2.item = 0;
l3.item = 6;

l1.next = l2;
l2.next = l3;
l3.next = null;

```

## Node operations

```
public ListNode(int item , ListNode next) 
{
    this.item = item;
    this.next = next;
}

public ListNode(int item) 
{
    this(item, null);
}

ListNode l1 = new ListNode(7, new ListNode(0, new ListNode(6)));
```

Advantages over array lists:
* inserting item in middle of linked list takes constant time if you have reference to previous node
* moreover, list can keep growing until memory runs out

Inserts a new item afer "this"

```
public void insertAfter(int item)
{
    next = new ListNode(item, next);
}

l2.insertAfter(3);

```

## Disadvantages
* Finding the nth item of a linked list takes time proportional to n -> length of list (constant-time on array lists)

```
public ListNode nth(int position) 
{
    if (position == 1) 
    {
        return this;
    }
    else if ((position < 1) || (next == null))
    {
        return null;
    }
    else
    {
        return next.nth(position-1);    
    }
}
```

_List of Objects_
Reference any object by declaring a reference of type Object.

```
public class SListNode 
{
    public Object item;
    public SListNode next;
}
```
A List Class
2 problems with SListNodes

1. Insert new item at beginning of list.

x = new SListNode("soap", x);


2. How do you represent an empty list
x = null;

Run-time error if you call a method on a null object.

Solution:
Separate SList class that maintains head of list.

```
public class SList
{
    private SListNode head;
    private int size;
    
    public  SList()
    {
        head = null;
        size = 0;
    }
    
    public void insertFront(OBject item)
    {
        head = new SListNode(item, head);
        size++;
    }
```

## Resources

* http://www.cs.cornell.edu/courses/cs2110/2011fa/Lectures/L06-Lists/L06-Lists.pdf