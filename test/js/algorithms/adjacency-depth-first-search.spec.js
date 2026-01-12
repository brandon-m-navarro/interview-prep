/**
 * depth-first-search.spec.js
 *
 * Test harness for depth first search
 */
/* Dependencies  */
import { expect } from 'chai';
import dfs from '../../../problems/js/algorithms/adjacency-depth-first-search.js';

/* Test Cases */
describe('Algorithms: Depth First Search from Adjacency List', function () {
    const sampleGraph = [
        [1, 3, 8],
        [0, 7],
        [3, 5],
        [0, 2, 4],
        [3, 8],
        [2, 6],
        [5],
        [1],
        [0, 4],
    ];

    it('should visit nodes in order', function () {
        const expectedResult = [0, 1, 7, 3, 2, 5, 6, 4, 8];
        expect(dfs(sampleGraph, 0)).to.deep.equal(expectedResult);
    });
});
