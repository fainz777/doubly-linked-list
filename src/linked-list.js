const Node = require('./node');

class LinkedList {
    constructor() {
        this.list = [];
        this.setProperties();

    }

    setProperties() {
        this.length = this.list.length;
        this._head = this.list[0];
        this._tail = this.list[this.length - 1];
    }

    append(data) {
        const prev = this.list.length - 1;
        this.list.push(new Node(data, prev));
        this.setProperties();
    }

    head() {
        return this.list[0].data;
    }

    tail() {
        return this.list[this.length - 1].data;
    }

    at(index) {
        return this.list[index].data;
    }

    insertAt(index, data) {
        this.list.splice(index, 0, new Node(data));
        this.setProperties();
    }

    isEmpty() {
        return !this.list.length;
    }

    clear() {
        this.list = [];
        this.setProperties();
    }

    deleteAt(index) {}

    reverse() {
        this.list.reverse();
    }

    indexOf(data) {

    }
}

module.exports = LinkedList;
