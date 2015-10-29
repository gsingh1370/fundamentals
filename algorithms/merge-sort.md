Merge Sort
==========

Merge sort uses divide and conquer design paradigm to sort a contiguous array of objects. It works by:

Dividing the array in two halves and sorting them recursively
Merging the two sorted halves together to create a fully sorted array
It is an important sorting technique because:

It guarantees O(nlogn) running time unlike quicksort which gives O(nlogn) average case running time and O(n^2) in worst case
It can be modified to perform 'external sort': sorting objects stored on different machines
Considerations when implementing it:

Base case of recursion: Return from recursive calls when the length of supplied array <= 1. In this case the array is trivially sorted
Merging subroutine: Check for overflow conditions on arrays when merging them. Overflow can occur when we have read till the end of the array and continue incrementing its reader pointer

MergeSort is a recursive sorting algorithm that uses O(n log n) comparisons in the worst case. To sort an array of n elements, we perform the following three steps in sequence:

Divide the unsorted list into two sublists of about half the size
Sort each of the two sublists
Merge the two sorted sublists back into one sorted list.
There are two merge sort implementations: top-down (uses recursion) and bottom-up. Last one is more efficient and popular.

Merge sort is a sorting algorithm which works in O(nlogn) time. It means that it is an asymptotically optimal sorting algorithm, though usually quick sort may be a better idea. Merge sort should be considered when you want to ensure stability - this algorithm doesn't change the order of elements which have the same key. It is useful for example when you want to sort a collection of data using multiple fields - first sort by name, then by surname etc. Merge sort isn't a good idea when you have limited space - it needs O(n) additional memory to sort your data.




The concept is simple: Define a recursive function that (1) divides an array in half, (2) calls itself to sort both halves separately, and (3) merges the two resultant arrays after. Once the two sorted halves have been shuffled together, return the resulting array.

Some things to keep in mind:

The average and worst-case time complexities of merge sort are O(n log n). If you have a pre-processing check to see if the list is already sorted, you could have a best case of O(n). But in the words of MIT professor Charles Leiserson, best cases are pretty "bogus".
Merge sort implementations are usually broken up into two distinct parts: (1) a recursive mergeSort function, and (2) a simple array-merging merge function.
Sorting, in general, takes at least O(n log n) time—the fastest sorting algorithm in existence that handles arbitrary data would take O(n log n) time.

## Algorithm

```
 split in half
m = n / 2

# recursive sorts
sort a[1..m]
sort a[m+1..n]

# merge sorted sub-arrays using temp array
b = copy of a[1..m]
i = 1, j = m+1, k = 1
while i <= m and j <= n,
    a[k++] = (a[j] < b[i]) ? a[j++] : b[i++]
    → invariant: a[1..k] in final position
while i <= m,
    a[k++] = b[i++]
    → invariant: a[1..k] in final position
````

Merge sort A[1..n]

1. If n = 1, done -- O(1)
2. Recursively sort A[1..[n/2]] and a[n/2+1..n] -- 2T(n/2) 
3. "Merge" 2 sorted lists -- O(n)
 
### Recurrence
T(n) = 
{ 
    O(1) if n = 1 (usually omit constant base cases)
    2T(n/2) + O(n) if n > 1
}

Recursion tree: T(n) = 2T(n/2) + cn const c > 0

```
T(n) =  cn
        / \
    t(n/2) t(n/2)
    

T(n) =       cn              cn
            /  \
         cn/2  cn/2          cn
         /\      /\
     cn/4 cn/4  cn/4 cn/4    
                 
                             O(n)
                             
             Total = (cn)logn + O(n)
                   = O(nlogn)
     
height = log n
# of leaves = n
```
### Key subroutine: Merge

20      12
13      11 
7        9
2        1

1 2 7 9... and so on

Progressively find smallest, find in either list. Look at two elements, and find smallest. 

Time = O(n) on n total elements



## Resources
* http://www.sorting-algorithms.com/merge-sort
* http://www.cs.mcgill.ca/~dprecup/courses/IntroCS/Lectures/comp250-lecture11.pdf
* http://www.youtube.com/watch?v=JPyuH4qXLZ0#t=17m11s