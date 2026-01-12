/**
 * Queue.js
 *
 * Generator function for a queue data structure
 */
export default class Queue {
    constructor (arr) {
        this.list = arr;
    };

    enqueue (item) {
        this.list.push(item);
    };

    dequeue () {
        return this.list.shift();
    };

    isEmpty () {
        if (this.list.length < 1) {
            return true;
        }
        return false;
    };
}
