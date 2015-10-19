function swap(a, i, j) {
  var tmp = a[i];
  a[i] = a[j];
  a[j] = tmp;
}

function insertionSort(a) {
  for (var i = 0; i < a.length; i++) {
    var j = i;
    while (j > 0 && a[j-1] > a[j]) {
      swap(a, j, j-1);
      j--;
    }
  }

  return a;
}