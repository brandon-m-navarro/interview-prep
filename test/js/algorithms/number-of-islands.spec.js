/**
 * number-of-islands.spec.js
 *
 * Test harness for number of islands
 */
/* Dependencies  */
import { assert } from 'chai';
import numberOfIslands from '../../../problems/js/algorithms/number-of-islands.js';

describe('Algorithms: Number of Islands', function () {
    it('should handle detecting one island', function () {
        const grid = [
            [1, 1, 1, 1, 0],
            [1, 1, 0, 1, 0],
            [1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ];

        assert.equal(numberOfIslands(grid), 1);
    });

    it('should handle detecting multiple islands', function () {
        const grid = [
            [1, 1, 0, 0, 0],
            [1, 1, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 1, 1],
        ];

        assert.equal(numberOfIslands(grid), 3);
    });
});
