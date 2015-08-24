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
