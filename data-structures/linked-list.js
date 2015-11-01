// TODO: Update head, handle errors

function List() {
  this.head = null;
  this.length = 0;

  this.traverse = function() {
    var node = this.head;

    while (node != null) {
      console.log(node.data);
      node = node.next;
    }
  };

  this.insertAfter = function(node, newNode) {
    newNode.next = node.next;
    node.next = newNode;
    this.length++;
  };

  this.insertBeginning = function(list, newNode) {
    newNode.next = list.head;
    this.head = newNode;
    this.length++;
  };

  this.removeAfter = function(node) {
    var oldNode = node.next;
    node.next = oldNode.next;
    oldNode = null;
    this.length--;
  };
}

function Node(data, next) {
  this.data = {};
  this.next = null;
}
