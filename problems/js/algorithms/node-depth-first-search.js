/**
 * Node DFS
 * 
 * Below you'll find a class that builds a graph (using GraphNode instances)
 * from an adjacencyMap. The creation of the Graph and its nodes is completed
 * for you, the only missing method you need to complete is dfs. dfs takes
 * two parameters: the node where the search starts, and the value to search
 * for.
 */
/* Dependencies */
import GraphNode from '../../../data-structures/GraphNode.js'

export default class DFSGraph {
    constructor (adjacencyMap) {
        this.adjacencyMap = adjacencyMap;
        this.nodes = [];
        this.nodeMap = new Map();
        this.isFound = false;

        this.createNodes();

        if (this.nodes.length > 0) {
            this.constructGraph();
        }
    }

    // Reset the graph's nodes for different searches
    resetGraph () {
        this.isFound = false;
        for (let i=0; i<this.nodes.length; i++) {
            this.nodes[i].isVisited = false;
        }
    }

    // Using the adjacencyMap, create a Nodes
    createNodes () {
        if (this.adjacencyMap) {
            for (let [key, value] of this.adjacencyMap) {
                let createdNode = new GraphNode(key);
                this.nodes.push(createdNode);
                this.nodeMap.set(key, createdNode);
            }
        } else {
            console.error(
                'Cannot instantiate a Graph without an adjacencyMap'
            );
        }
    };

    // Using the adjacencyMap, tie the created nodes together
    constructGraph () {
        for (let i=0; i<this.nodes.length; i++) {
            // Get the cooresponding node from original adjList
            let nodesToAdd = this.adjacencyMap.get(this.nodes[i].value);

            // Initialize 'adjacent' property for all Nodes
            for (let y=0; y<nodesToAdd.length; y++) {
                this.nodes[i].adjacent.push(this.nodeMap.get(nodesToAdd[y]));
            }
        }
    }

    // Get the current nodes in the graph
    getNodes () {
        return this.nodes;
    }

    // Get whether or not the node was found
    wasFound () {
        return this.isFound;
    }

    // Visit the specified node
    visit (node, val) {
        node.isVisited = true;

        if (val == node.value) {
            this.isFound = true;
        }
    }

    // Depth First Search
    //   node - head, where the search starts
    //   val - the value to search for
    dfs (node, val) {
        /**
         * Write your solution here
         **/
    }
}
