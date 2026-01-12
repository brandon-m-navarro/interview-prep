/**
 * Pascal's Triangle
 * 
 * Given an integer numRows (0-indexed), return the first numRows of Pascal's
 * triangle.
 * 
 * https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif
 */

export default function pascalsTriangle(rowNumber) {
    const row = new Array(rowNumber + 1);
    row[0] = 1;
    row[rowNumber] = 1;
    
    // Calculate using the combination formula: C(n, k) = C(n, k-1) * (n - k + 1) / k
    for (let i=1; i<=Math.floor(rowNumber / 2); i++) {
        const value = row[i - 1] * (rowNumber - i + 1) / i;
        row[i] = Math.round(value);
        row[rowNumber - i] = Math.round(value); // Symmetric
    }
    
    return row;
}
