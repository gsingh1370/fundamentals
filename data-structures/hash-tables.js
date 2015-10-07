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
