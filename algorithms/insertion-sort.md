Insertion Sort
==============

## Pseudo-code
InsertionSort(A, n) // Sorts A[1.. n]
       
```
for i ← 1 to length(A) - 1
    j ← i
    while j > 0 and A[j-1] > A[j]
        swap A[j] and A[j-1]
        j ← j - 1
    end while
end for
```
        
## Example
```
8 2 4 9 3 6
2 8 4 9 3 6
2 4 8 9 3 6
2 4 8 9 3 6
2 3 4 8 9 6
2 3 4 6 8 9 <- done
```

## Running time
* Depends on input (e.g. already sorted)
* Depends on input size (6 elem vs 6x10^9)
    - parameterize in input size
* Want upper bounds
    - guarantee to user

### Kinds of analysis
Worst-case (usually)
T(n) = max time on any input of size n

Average-case (sometimes)
T(n) = expected time over all inputs of size n
(Need assumption of stat distribution)

Best case (bogus)
can cheat

#### What is insertion sort's worst case time?
Depends on computer
    - relative speed (on same machine)
    - absolute speed (on diff machine)

**BIG IDEA! - Asymptotic analysis**

1. Ignore machine dependent constants
2. Look at __growth__ of T(n) as n -> inf

#### Asymptotic notation
O notation (theta notation) Drop low-order terms and ignore leading constants

```
3n^3 + 9On^2 - 5n + 6046 = O(n^3)
```

As n -> inf, O(n^2) alg always beats a O(n^3) alg.

### Insertion sort analysis
Worst-case input reverse sorted

Is insertion sort fast?

Moderately so for small n

Not at all for large n