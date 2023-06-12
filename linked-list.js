"use strict";
/** LLNode: node for a singly linked list. */
class LLNode {
    constructor(val) {
        this.next = null;
        this.val = val;
    }
}
/** LinkedList: chained together nodes. */
class LinkedList {
    constructor(vals = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        for (let val of vals)
            this.push(val);
    }
    /** push(val): add new value to end of list. */
    push(val) {
        const newLLNode = new LLNode(val);
        if (this.tail !== null) {
            this.tail.next = newLLNode;
        }
        this.tail = newLLNode;
        if (this.head === null) {
            this.head = newLLNode;
        }
        this.length++;
        // console.log("length: ", this.length);
    }
    /** unshift(val): add new value to start of list. */
    unshift(val) {
        const newLLNode = new LLNode(val);
        newLLNode.next = this.head;
        this.head = newLLNode;
        if (this.tail === null) {
            this.tail = newLLNode;
        }
        this.length++;
    }
    /** pop(): return & remove last item. */
    pop() {
        if (this.length === 0) {
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
        if (this.tail === null)
            throw new Error("the list is empty");
        if (this.length === 1) {
            const returnVal = this.tail.val;
            this.head = null;
            this.tail = null;
            this.length--;
            return returnVal;
        }
        //grab the current head value
        const returnVal = this.head.val;
        this.head = this.head.next;
        this.length--;
        return returnVal;
    }
    /** getAt(idx): get val at idx. */
    getAt(idx) {
        if (idx >= this.length)
            throw new Error("invalid index");
        //count to track location by index
        let count = 0;
        //while the count is not equal to idx, increment it
        let curr = this.head;
        while (count != idx) {
            curr = curr.next;
            count++;
        }
        //return the node val
        return curr.val;
    }
    /** setAt(idx, val): set val at idx to val */
    setAt(idx, val) {
        if (idx >= this.length)
            throw new Error("invalid index");
        //count to track location by index
        let count = 0;
        let curr = this.head;
        while (count != idx) {
            curr = curr.next;
            count++;
        }
        curr.val = val;
    }
    /** insertAt(idx, val): add node w/val before idx. */
    insertAt(idx, val) { }
    /** removeAt(idx): return & remove item at idx, */
    removeAt(idx) { }
    /** average(): return an average of all values in the list */
    average() { }
}
module.exports = LinkedList;
