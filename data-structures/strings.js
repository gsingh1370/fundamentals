// 1.1 - Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

function hasUniqueCharacters(str) {
  var unique = {};

  for (var i = 0, len = str.length; i < len; i++) {
    if ( ! unique.hasOwnProperty( str[i] ) ) {
      unique[ str[i] ] = true;
    } else {
      return false;
    }
  }

  return true;
}

// 1.3 - Given two strings, write a method to determine if one is a permutation of the other.
function isPermutation(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  var str1arr = str1.split('').sort();
  var str2arr = str2.split('').sort();

  for (var i = 0; i < str1arr.length; i++) {
    if (str1arr[i] !== str2arr[i]) {
      return false;
    }
  }

  return true;
}

// alternate, compare character counts

// 1.4 - Write a method to replace all spaces in a string with '%20'.
function replaceSpaces(str) {
  return str.replace(/\s+/g, '%20');
}

// 1.5
function compress(str) {

  var count = 0;
  var prevChar;
  var newStr = '';

  for (var i = 0; i < str.length; i++) {
    if ( typeof prevChar == 'undefined') {
      prevChar = str[i];
    }

    if ( prevChar == str[i] ) {
      count++;
    } else {
      newStr += prevChar + (count > 1 ? count : '');

      count = 1;
      prevChar = str[i];
    }
  }

  return newStr + prevChar + (count > 1 ? count : '');
}

function permutate(str, remain) {
  var len = remain.length;

  if (len == 0) {
    console.log(str);
  } else {
    for (var i = 0; i < len; i++) {
      permutate( str + remain.charAt(i), remain.substring(0, i) + remain.substring(i + 1, len) );
    }
  }
}

console.log( permutate('', process.argv[2]) );


