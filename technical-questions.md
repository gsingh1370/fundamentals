## Coding

### Write a method / function that reverses a string ( please do not use a library or pre-defined function like myString.reverse() )

    // method 1: half index + swapping characters
    function reverse(str) {
      str = str.split('');

      var len = str.length;
      var mid = Math.floor(len / 2);

      for (var i = 0, tmp; i < mid; i++) {
        tmp = str[len - i - 1];
        str[len - i - 1] = str[i];
        str[i] = tmp;
      }

      return str.join('');
    }

    // method 2: iteration + string concatenation
    function reverse(str) {
        var reversed = '';

        for (var i = str.length - 1; i >= 0; i--) {
            reversed += str[i]
        }

        return reversed;
    }

### Design a desk of cards that can be used for various card game applications.  Be sure to mention both the cards and the game itself (pick any or feel free to abstract).

Poker - Texas Hold'em

Standard 52 card deck

    function Card(rank, suit) {
      this.rank = rank;
      this.suit = suit;
    }

    function Deck() {
      this.cards = [];

      for (var i = 0; i < this.RANKS.length; i++) {
        for (var j = 0; j < this.SUITS.length; j++) {
          this.cards.push( new Card( this.RANKS[i], this.SUITS[j] ) )
        }
      }
    }

    Deck.prototype.RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    Deck.prototype.SUITS = ['c', 'd', 'h', 's'];


### Write a method / function to shuffle the deck of cards from above

    Deck.prototype.shuffle = function (iterations) {
      if (typeof iterations == 'undefined') {
        iterations = 1;
      }

      for (var i = 0; i < iterations; i++) {
        this.cards.forEach(function (currentCard, index, cards) {
          var randomIndex = Math.floor(Math.random() * this.cards.length );

          cards[index] = cards[randomIndex];
          cards[randomIndex] = currentCard;
        }.bind(this));
      }
    };


## Object-Oriented Programming
### What is an interface? Can you give an example of when it might be used?

An interface is a contract between classes that implement it which requires that all methods defined by the interface must be implemented before the class will compile. By implementing an interface, a class formalizes the behavior it promises to provide through the methods it exposes. The caller knows which behavior will be available while the implementer knows what to implement.

Interfaces are commonly used in plug-n-play architectures where components can be interchanged at will. A great example of this is JDBC API, which exposes several interfaces like Driver, Connection, Statement, and ResultSet for accessing and processing data stored in a data source. Database vendors provide drivers which implement the common set of interfaces defined by the JDBC API such that the end user of the driver need not to know the internal implementation details or specifics of the database software. Instead, they may program to the JDBC interface, giving them the flexibility to later change to a different database simply by switching to the corresponding JDBC database driver.

### What is inheritance? Can you give an example of when it might be used?
Inheritance is the process of creating a new class from a existing one. The new class may inherit the attributes and behaviors of the base class. The derived class may also contain its own additional methods and fields which differentiates it from the base class.

Inheritance is particularly useful when different classes exhibit an "is a" relationship where they share traits in common. A good example of this are the classes BigDecimal, Double, Float, and Integer which are all different representations of  numeric values and they all extend from the Number class.


## Data Structures

### Compare an ArrayList to a HashMap. What are the advantages and disadvantages of each?

ArrayList is an implementation of the List interface while HashMap is an implementation of the Map interface. ArrayList is an ordered collection in which the user has control over where in the list the element is inserted. Elements in a list are accessed by their index. In contrast, a HashMap maps keys to values and the values are accessed by their corresponding key. Moreover, HashMap does not guarantee the order of its key-value pairs while ArrayList maintains insertion order of its elements. ArrayList allows for duplicate elements and allows for multiple null elements.  HashMap only allows for a single null key and permits null values. Performance-wise, HashMap provides constant time O(1) performance for retrieval and insertions. ArrayList performs in constant time, O(1), for accessing elements and in linear fashion, O(n), for searching, inserting, and deleting.


### Compare an ArrayList to a LinkedList. What are the advantages and disadvantages of each?

ArrayList and LinkedList are both implementations of the List interface. The two implementations differ in how they internally store elements. As a result, each has differing performance implications depending on the operation. ArrayList is implemented internally as an array while a LinkedList internally uses a doubly Linked List. ArrayList uses a structure based off indexes to store its elements allowing for constant time performance for retrieving elements. However, removals are more costly, as elements must be rearranged. In contrast, a LinkedList stores it's elements as nodes, containing the value of the element as well as references to the previous and next elements. This slows retrieval as you must traverse the list from the beginning or end. A LinkedList is more efficient when the access pattern is forwards and backwards from a a node, rather than accessed in complete random. Because LinkedList uses references, insertions and removals are in constant time as the elements do not need to be shifted, only the references to the previous and next elements need to be changed. It is  advantageous to use ArrayList when the application is expected to do more retrieval (e.g. random access) than insertions and deletions. Conversely, if more insertions and deletions are expected than retrievals, LinkedList is preferable. In terms of memory, the elements of an ArrayList will consume less, as each index only stores the value while in a LinkedList there is overhead as each node includes its value as well as references to the next and previous nodes.

### What is the difference between String and StringBuffer? When would you use a StringBuffer?

The difference between String and StringBuffer is that String objects are immutable and StringBuffer objects are mutable. That is, a String may not be modified after it is created. Because String is immutable, whenever string concatenation is performed, a new instance of String is created. Thus, StringBuffer offers performance benefits, namely speed and less consumption of memory, when performing a large amount of string concatenations.


## Performance

### Caching

#### Why would you implement caching?

You would implement caching to improve performance of an application. Response times for an application can affect user satisfaction which in turn can directly affect revenue and retention. As a result, creating a system that is optimized for fast responses times and low latency is critical.

#### What’s the difference between Time To Live (TTL) and Event Based cache management?

TTL based caches are used to store static content where it is known ahead of time how long the item is desired to be cached for. In contrast, event based caches are driven by actions generated by users or by the system itself. Because the application is made to be aware of the change, it can appropriately respond to the trigger event, by purging and refreshing the data. This type of cache is ideal when data is static for an unknown period of time but may or may not change in an indeterminate time in the future.


## Testing

### What is the importance of unit testing?

Unit tests are important for ensuring the correctness, accuracy, and validity of a unit of source code's behavior. They allow bugs to be found earlier in the development cycle and facilitate the discovery of issues in regression and integration cycles. Moreover, unit tests serves as documentation and encourages design to adhere to specifications.


### When do you create and modify unit tests?

Depending on the testing methodology you subscribe to, unit tests may be created at different stages of the development cycle. Testing should be not thought of as an afterthought, however, but an integral part of the development process and so should be created as early as possible. In test driven development, tests are created before the functionality has even been implemented. This allows the implementer to focus on the what rather than the how and allows the tests to drive the criteria for success. Unit tests should modified whenever functionality is added, modified, or removed that impacts the unit of source code's behavior.


## Databases

### What is an index? What is a clustered index?

A database index is a data structure that allows for faster retrieval of data stored in a database. They are created from one or more columns of a table, allowing for fast look-ups that use the columns of the index. A clustered index is a special index that reorders the way records in the table are physically stored. This allows for even greater speed of retrieval when data is accessed sequentially in the same or reverse order of the clustered index.

### What is the HAVING clause and what is it used for?

The HAVING clause is a SQL construct that is used to only return rows that have aggregate values that satisfy a specified condition.

### What is the difference between a LEFT OUTER JOIN and an INNER JOIN

A left outer join will always return all of the records of the left table, even if the join condition does not find any matching records in the right table. In contrast, in an INNER JOIN both the left and right tables must satisfy the join predicate in order to be included in the result set.

### Resources
* http://bigocheatsheet.com
