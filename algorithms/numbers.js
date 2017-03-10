

function increment(a) {
  var result = [];
  var incrementNext = true;

  for (var i =  a.length - 1; i >= 0; i--) {
    var currValue = a[i];

    if (currValue < 9) {

      if (incrementNext) {
        currValue++;
      }

      incrementNext = false;

      result.unshift(currValue);

      a.pop();
      break;
    } else {
      incrementNext = true;
      result.unshift(0);
      a.pop();
    }
  }

  if (incrementNext == true) {
    result.unshift(1);
  } else {
    result.unshift.apply(result, a);
  }

  return result;

}



console.log(increment([9,1,9,9]));