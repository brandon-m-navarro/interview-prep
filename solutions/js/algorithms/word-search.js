/**
 * Word Search
 * 
 * Given an m x n grid of characters board and a string word, return true if
 * word exists in the grid.
 *
 * The word can be constructed from letters of sequentially adjacent cells,
 * where adjacent cells are horizontally or vertically neighboring. The same
 * letter cell may not be used more than once.
 * 
 * Constraints:
 *  m == board.length
 *  n = board[i].length
 *  1 <= m, n <= 6
 *  1 <= word.length <= 15
 *  board and word consists of only lowercase and uppercase English letters.
 */

export default function wordSearch(board, word) {
    const m = board.length;
    const n = board[0].length;

    // Create visited board
    const visited = Array(m).fill().map(() => Array(n).fill(false));

    // For each cell in the board, try to find the word starting from that cell
    for (let row=0; row<m; row++) {
        for (let col=0; col<n; col++) {
            // If the first letter matches, start DFS from this cell
            if (board[row][col] === word[0]) {
                if (dfs(board, word, row, col, 0, visited)) {
                    return true;
                }
            }
        }
    }

    return false;
}

const dfs = function(board, word, row, col, index, visited) {
    // Base case: if we've found all characters
    if (index === word.length) {
        return true;
    }

    // Check boundaries
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) {
        return false;
    }

    // Check if already visited or doesn't match current character
    if (visited[row][col] || board[row][col] !== word[index]) {
        return false;
    }

    // Mark current cell as visited
    visited[row][col] = true;

    // Explore all four directions
    const directions = [
        [1, 0],   // down
        [-1, 0],  // up
        [0, 1],   // right
        [0, -1]   // left
    ];

    // Try all adjacent cells
    for (const [dr, dc] of directions) {
        const newRow = row + dr;
        const newCol = col + dc;

        if (dfs(board, word, newRow, newCol, index + 1, visited)) {
            // If found in any direction, return true immediately
            visited[row][col] = false; // Clean up before returning
            return true;
        }
    }

    // Backtrack: unmark current cell as visited
    visited[row][col] = false;

    return false;
}
