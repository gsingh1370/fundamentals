function merge(left, right) {
  var result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push( left.shift() );
    } else {
      result.push( right.shift() );
    }
  }

  // either left or right may have elements left, so append them
  result.push.apply(result, left);
  result.push.apply(result, right);

  return result;
}

function mergeSort(a) {
  // base case - list of zero or one elements is sorted by definition
  if ( ! a || a.length <= 1) {
    return a;
  }

  // divide list into equal-sized sublists
  var left = [];
  var right = [];
  var mid = Math.floor(a.length / 2);

  for (var i = 0; i < mid; i++) {
    left.push(a[i]);
  }

  for (i = mid; i < a.length; i++) {
    right.push(a[i]);
  }

  // recursively sort sublists
  left = mergeSort(left);
  right = mergeSort(right);

  // merge the now-sorted sublists
  return merge(left, right);
}