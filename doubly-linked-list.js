/** Node: node for a doubly linked list. */

class Node {
  next = null;
  prev = null;
  constructor(val) {
    this.val = val;
  }
}

class DoublyLinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** get(idx) returns a node at the given index */

  _get(idx) {
    let counter = 0;
    let curr = this.head;

    while (counter != idx) {
      counter++;
      curr = curr.next;
    }

    return curr;
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    //if list is currently empty
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    //handle case of currently empty list
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    newNode.next = this.head;

    this.head.prev = newNode;

    this.head = newNode;
    this.length++;
  }

  /** pop(): remove last item & return its value */

  pop() {
    if (this.length === 0) return null;

    let val = this.tail.val;
    this.tail = this.tail.prev;

    //handle case of length = 1
    if (this.length === 1) {
      this.head = null;
    }

    this.length--;

    return val;
  }

  /** shift(): remove first item & return its value */

  shift() {
    if (this.length === 0) return null;

    if (this.length === 1) {
      const returnVal = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;

      return returnVal;
    }

    const returnVal = this.head.val;

    this.head = this.head.next;
    this.head.prev = null;
    this.length--;

    return returnVal;
  }

  /** getAt(idx): get val at idx.*/

  getAt(idx) {}

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {}

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {}

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {}

  /** return average (mean) of list values. */

  average() {}
}

module.exports = DoublyLinkedList;
