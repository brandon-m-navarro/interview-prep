/**
 * Number of Islands 
 *
 * Given an m x n 2D binary grid grid which represents a map of 1s (land)
 * and 0s (water), return the number of islands.
 * 
 * An island is surrounded by water and is formed by connecting adjacent lands
 * horizontally or vertically. You may assume all four edges of the grid are
 * all surrounded by water.
 *
 * Constraints:
 *  m == grid.length
 *  n == grid[i].length
 *  1 <= m, n <= 300
 *  grid[i][j] is 0 or 1.
 */
import Queue from "../../../data-structures/Queue.js";

export default function numberOfIslands(grid) {

    // We can create a 2D array for visited squares. Once a BFS finishes, we
    // continue looking through this array until all squares are visited.
    // This means multiple BFS will take place, one for each island. 

    // We can avoid having to to do BFS multiple times for an island by
    // checking if we've visited a coordinate before searching.

    // Need to include boundry checks so we dont check negative indices or
    // indicies outside of m x n.

    // Create 2D visited boolean array
    let visited = [];
    for (let i=0; i<grid.length; i++) {
        visited.push(Array(grid[i].length).fill(false));
    }

    // Loop through grid. When a 1 is detected, BFS search through it, queuing
    // valid neighbors
    let numIslands = 0;
    for (let row=0; row<grid.length; row++) {
        for (let col=0; col<grid[row].length; col++) {

            // If its been visited, move on
            if (!visited[row][col]) {

                // Hasnt been visited, if it's a 1, begin bfs
                if (grid[row][col] === 1) {
                    visited = bfs(grid, row, col, visited);

                    // This should have found all connected 1s, meaning an
                    // island was fully discovered.
                    numIslands++;
                } else {
                    visited[row][col] = true;
                }
            }
        }
    }

    return numIslands;
}

// Begin search through grid starting at row,col. Return the visited array.
const bfs = function (grid, row, col, visited) {
    const queue = new Queue([{row: row, col: col}]);

    // Mark first enqueue as visited
    visited[row][col] = true;

    // Specified row,col should be one.
    while (!queue.isEmpty()) {
        const { row, col } = queue.dequeue();
        let adj = [[row+1, col], [row, col+1], [row-1, col], [row, col-1]];

        // Check adjacent. Mark all as visited. Add island tiles to queue.
        for (const coord of adj) {
            let row = coord[0],
                col = coord[1];

            // Check it's a valid coordinate
            if (row >= 0 && col >= 0 && row < grid.length && col < grid[0].length) {

                if (!visited[row][col]) {
                    if (grid[row][col] === 1) {
                        queue.enqueue({row: row, col: col});
                    }
                    // Whether or not its an island, we've visited it
                    visited[row][col] = true;
                }
            }
        }
    }

    return visited;
}

/**
 * Analysis
 * 
 * Approach	        Time	Space	    Mutates Input   Readability
 * 
 * Above Solution	O(m×n)	O(m×n)	    No	            Good
 * In-place	        O(m×n)	O(min(m,n))	Yes	            Good
 * 
 * As seen in the graph, the above solution can be improved to reduce the space
 * complexity by modifying the grid in-place. Instead of using a 2D boolean
 * array, visited grid coordinates could be switched to 0, meaning they were
 * visited.
 * 
 * I'm not a huge fan of modifying params, as in larger codebases, side-effects
 * are a recipe for bugs.
 * 
 * The visited array could be reduced to 1/8 of the current size by using a bit
 * mask:
 *      `const visited = new Uint8Array(Math.ceil(m * n / 8));`
 * 
 * But again, for readability for a practice problem, using a boolean 2D array
 * is fine.
 * 
 * A DFS approach would also work here.
 */
