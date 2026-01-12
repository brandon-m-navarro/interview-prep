/**
 * adjacency-depth-first-search.js
 * 
 * Given a graph represented as an adjacency list and the node to start with,
 * return an array of the graph's nodes in depth-first order.
 * 
 * HINT: If using a recursive approach, it may be a good idea to create a
 *       helper scoped inside of dfs...
 */
export default function dfs(graph, source) {

    // DFS will be a recursive solution, and will essentially 'root' down
    // by greedily visiting the first neighbor of each node
    const res = [],
          visited = Array(graph.length).fill(false);

    // Since this is a recursive, another function needs to be defined to
    // properly scope our res & visited array variables
    let dfsSearch = function (currentNode) {
        visited[currentNode] = true;
        res.push(currentNode);

        // Visit all neighbors of the current node
        for (let i=0; i<graph[currentNode].length; i++) {
            const neighbor = graph[currentNode][i];
            if (!visited[neighbor]) {   // If you're struggling with the concept of recursion,
                dfsSearch(neighbor);    // I recommend steping through this solution with a
            }                           // debugger. Knowing about the call stack is essential.
        }
    };

    // Side-effects of res is good here
    dfsSearch(source);

    return res;
}
