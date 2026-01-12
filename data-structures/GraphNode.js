export default class GraphNode {
    constructor (value) {
        this.value = value;
        this.isVisited = false;
        this.adjacent = [];
    }
}
