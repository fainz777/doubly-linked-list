const Node = require('./node');

class LinkedList extends Array {
    constructor() {
        super();
        this.setProperties();

    }

    setProperties() {
        this._head = this[0];
        this._tail = this[this.length - 1];
    }

    append(data) {
        const prev = this.length - 1;
        this.push(new Node(data, prev));
        this.setProperties();

        return this;
    }

    head() {
        if (this[0]) {
            return this[0].data;
        }
        
        return null;
    }

    tail() {
        if (this.length) {
            return this[this.length - 1].data;
        }
        
        return null;
    }

    at(index) {
        return this[index].data;
    }

    insertAt(index, data) {
        this.splice(index, 0, new Node(data));
        this.setProperties();

        return this;
    }

    isEmpty() {
        return !this.length;
    }

    clear() {
        this.length = 0;

        return this;
    }

    deleteAt(index) {
        if (this[index]) {
            this.splice(index, 1);
        }

        return this;
    }

    /*reverse() {
        return this;

    }*/

    indexOf(data) {
        let index = -1;
        this.filter((item, i) => {
            if (index >= 0) {
                return;
            }

            if (item.data === data) {
                index = i;
            }
        });

        return index;
    }
}

module.exports = LinkedList;
