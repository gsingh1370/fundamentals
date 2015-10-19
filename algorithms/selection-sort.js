function findMax(a, n) {
  var max = a[0];
  var indmax = 0;

  for (var i = 1; i <= n; i++) {
    if (a[i] > max) {
      max = a[i];
      indmax = i;
    }
  }
  return indmax;
}

function swap(a, i, j) {
  var tmp = a[i];
  a[i] = a[j];
  a[j] = tmp;
  return a;
}

function selectionSort(a) {
  var i = a.length - 1;

  while (i > 0) {
    var indmax = findMax(a, i);
    swap(a, i, indmax);
    i--;
  }

  return a;
}

var a = [];
console.log(a);
console.log( selectionSort(a) );
