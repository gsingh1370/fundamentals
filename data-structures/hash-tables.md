# Hash Tables

A hash table (hash map) is a data structure used to implement an associative array, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

Ideally, the hash function will assign each key to a unique bucket, but it is possible that two keys will generate an identical hash causing both keys to point to the same bucket. Instead, most hash table designs assume that hash collisions—different keys that are assigned by the hash function to the same bucket—will occur and must be accommodated in some way.

In a well-dimensioned hash table, the average cost (number of instructions) for each lookup is independent of the number of elements stored in the table. Many hash table designs also allow arbitrary insertions and deletions of key-value pairs, at (amortized) constant average cost per operation.

Another explanation:

An associative array that maps an element of one type (the "key") to another type (the "value"). This mapping occurs via a hashing function that transforms the key into an integer. This integer is subsequently used as an index into an array where the value is stored, achieving constant-time access in the best case.

However, it is possible that the hashing function will produce the same index for different keys, resulting in a "collision". One technique for handling collisions is to store a linked list at each index in the array. When a collision occurs, the linked list is traversed to find the key/value pair we are trying to retrieve. If a collision occurs, access becomes a linear-time operation. Space requirements also increase, because the key must also be stored with the value (so the key can be matched when traversing the linked list).

## Hashing

In the context of hash tables, hash functions can be thought as function that takes an input from one space (e.g. strings) and outputs to a space useful for indexing (e.g. unsigned integers)

The idea of hashing is to distribute the entries (key/value pairs) across an array of buckets. Given a key, the algorithm computes an index that suggests where the entry can be found:

    index = f(key, array_size)

Often this is done in two steps:

    hash = hashfunc(key)
    index = hash % array_size

In this method, the hash is independent of the array size, and it is then reduced to an index (a number between 0 and array_size − 1) using the modulo operator (%).

By far, the most well known use for hashing is to convert a key into an array index for table lookup. Such data structures are called hash tables, and they are incredibly useful for a wide range of fields. A hash table is also surprisingly well suited to the implementation of a cache, and many web browsers and operating systems will use a hash table for just that.

Probably the second most well known use for hashing is in cryptography, where algorithms that are geared more toward security are used to create digital fingerpints for authentication and data integrity. While lookup hashes are not as complicated or as powerful as cryptographic hashes, adherence to many of the design principles for a cryptographic hash will typically result in a very good lookup hash, so even though there is a clear distinction between hashing for lookup and hashing for cryptography, one can encourage improvement in the other.

## Choosing a good hash function

* A basic requirement is that the function should provide a uniform distribution of hash values--GOAL: minimize collisions. A non-uniform distribution increases the number of collisions and the cost of resolving them.

### Ideal hash

* The process must be repeatable so that the same key hashes to the same index, while different keys do not.

* An ideal hash will permute its internal state such that every resulting hash value has exactly one input that will produce it. Any hash function that uses every part of the key to calculate the hash value will typically meet this requirement, so general hash functions that only process a part of the key will almost always be very poor because the differing parts of the key may not be the parts involved in creating the hash value. A good example of this is only hashing the first four or five characters of a string, and then using the algorithm to hash URLs that start with “http://”.

* A hash function is said to achieve avalanche if the resulting hash value is wildly different if even a single bit is different in the key. This effect aids distribution because similar keys will not have similar hash values. A hash function that distributes the hash values in a uniform manner will minimize collisions and fill the array more evenly.

## Load Factor
A critical statistic for a hash table is the load factor, that is the number of entries divided by the number of buckets:

    Load factor  = Number of entries / Number of buckets

As the load factor grows larger, the hash table becomes slower, and it may even fail to work (depending on the method used). The expected constant time property of a hash table assumes that the load factor is kept below some bound. For a fixed number of buckets, the time for a lookup grows with the number of entries and therefore the desired constant time is not achieved.

Second to that, one can examine the variance of number of entries per bucket. For example, two tables both have 1000 entries and 1000 buckets; one has exactly one entry in each bucket, the other has all entries in the same bucket. Clearly the hashing is not working in the second one.

A low load factor is not especially beneficial. As the load factor approaches 0, the proportion of unused areas in the hash table increases, but there is not necessarily any reduction in search cost. This results in wasted memory.

## Collision Resolution

 A collision is when two keys hash to the same index. No hashing algorithm can hash every key to a unique index if the possible keys exceeds the size of the array. Since most uses of hashing for lookup involve trying to take keys in a broad range and force them into indices for a smaller range, it stands to reason that no hash algorithm can perfectly hash a sequence of unknown keys into unique indices.

### Separate Chaining
In the method known as separate chaining, each bucket is independent, and has some sort of list of entries with the same index. The time for hash table operations is the time to find the bucket (which is constant) plus the time for the list operation.

In a good hash table, each bucket has zero or one entries, and sometimes two or three, but rarely more than that. Therefore, structures that are efficient in time and space for these cases are preferred. Structures that are efficient for a fairly large number of entries per bucket are not needed or desirable. If these cases happen often, the hashing is not working well, and this needs to be fixed.
![Separate Chaining ](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Hash_table_5_0_1_1_1_1_1_LL.svg/900px-Hash_table_5_0_1_1_1_1_1_LL.svg.png)

## Performance Analysis

O(1) ("constant time") search, insertion and deletion on average, and worst case of O(n)("linear time") typically occurring when there are hash key collisions (when multiple elements hash to the same key) or a rehashing is required (moving each element into a new, bigger backing array).

## Real-life Analogies

Finding a book in a library

## Implementations

### Naive Implementations
```js
function Hashtable(numBuckets) {

  this.numBuckets = numBuckets || 10;
  this.buckets = [];

  this.hashCode = function(key) {
    var hash = 0;

    if (key.length == 0) {
      return hash;
    }

    for (var i = 0; i < key.length; i++) {
       char = key.charCodeAt(i);
       hash = ( ( hash << 5 ) - hash ) + char;
       hash = hash & hash; // Convert to 32bit integer
    }

   return hash;
  }

  this.index = function(hash) {
    return hash % this.numBuckets;
  }

  this.set = function(key, value) {
    var hash = this.hashCode(key);
    var index = this.index(hash);

    if ( ! this.buckets[index] ) {
      this.buckets[index] = [value];
    } else {
      this.buckets[index].push(value);
    }
  };

  this.get = function(key) {
    var hash = this.hashCode(key);
    var index = this.index(hash);

    if ( this.buckets[index] ) {
      for (var i = 0; i < this.buckets[index].length; i++) {
        if ( this.buckets[index][i] == ) {

        }
      }
    }
  };
}


```

## Further reading / references
* https://stackoverflow.com/questions/730620/how-does-a-hash-table-work
* http://www.eternallyconfuzzled.com/tuts/algorithms/jsw_tut_hashing.aspx
