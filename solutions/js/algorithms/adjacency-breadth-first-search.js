/**
 * adjacency-breadth-first-search.js
 *
 * Given a graph represented as an adjacency list and the node to start with,
 * return an array of the graph's nodes in breadth first order.
 */
import Queue from '../../../data-structures/Queue.js';

export default function bfs(graph, source) {

    // Starting at source, add to queue
    const queue = new Queue([source]),
          res = [],
          visited = Array(graph.length).fill(false);

    // Iterate through queue until it is empty
    while (!queue.isEmpty()) {

        // Dequeue the next node, 'visit' it, and add to res
        let currentNode = queue.dequeue();
        if (!visited[currentNode]) {
            res.push(currentNode);
            visited[currentNode] = true;
        
            // Add all of currentNode's connections to the Queue
            graph[currentNode].map((n) => queue.enqueue(n));
        }
    }
    return res;
}
