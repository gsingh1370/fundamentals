Merge Sort
==========

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