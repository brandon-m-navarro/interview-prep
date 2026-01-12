export default class HashTable {
    constructor () {
        this.table = {};
    }

    add (newVal) {
        if (this.table.hasOwnProperty(newVal)) {
            this.table[newVal]++;
            return this.table[newVal];
        }
        this.table[newVal] = 1;
        return false;
    }
}
