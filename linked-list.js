/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    if (this.tail !== null) {
      this.tail.next = newNode;
    }

    this.tail = newNode;

    if (this.head === null) {
      this.head = newNode;
    }

    this.length++;
    // console.log("length: ", this.length);
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;

    if (this.tail === null) {
      this.tail = newNode;
    }

    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.tail === null) {
      throw new Error("Cannot pop empty list");
    }

    if (this.length === 1) {
      const returnVal = this.tail.val;

      this.head = null;
      this.tail = null;
      this.length--;
      return returnVal;
    }

    let cur = this.head;
    let prev = null;
    while (cur.next !== null) {
      prev = cur;
      cur = cur.next;
    }

    const tailVal = this.tail.val;
    this.tail = prev;
    this.tail.next = null;

    this.length--;

    return tailVal;
  }

  /** shift(): return & remove first item. */

  shift() {

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

module.exports = LinkedList;
