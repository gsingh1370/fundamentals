Selection Sort
==============

The idea of selection sort is very simple: we can repeatedly select the maximum element in an
array, move it in the last position, then select the maximum in the remaining portion, move it into
the second to last position etc., until no elements are left. For examples, supposed we have the
following array:

1 4 2 3
1 3 2 4
1 2 3 4

### Finding the maximum in an array

```js
function findMax(arr) {
    var max = arr[0];
    var indmax = 0;
    
    for (var i = 0; i < arr.length; i++) {
        if (a[i] > max) {
            max = a[i];
            indmax = i;
        }
    }
    return indmax;
}
```

```js
function swap(arr, i, j) {
    var tmp = a[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    return arr;
}
```

```js
function selectionSort(arr) {
    var i = arr.length;
    
    while (i > 0) {
        var indmax = findMax(arr);
        arr = swap(arr, i, indmax);
        i--;
    }
    
    return arr;
}
```

## Complexity
Finding max of n elemnts takes n - 1 comparisons
The comparison in the while loop is executed n times.

Thus

n + (n-1) + (n-2) + ... + 1 = (n+1)n/2 => O(n^2)