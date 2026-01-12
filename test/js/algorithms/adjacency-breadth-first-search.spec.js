/**
 * breadth-first-search.spec.js
 *
 * Test harness for breadth first search
 */
/* Dependencies  */
import { expect } from 'chai';
import bfs from '../../../problems/js/algorithms/adjacency-breadth-first-search.js';

/* Test Cases */
describe('Algorithms: Breadth First Search from Adjacency List', function () {
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
        const expectedResult = [0, 1, 3, 8, 7, 2, 4, 5, 6];
        expect(bfs(sampleGraph, 0)).to.deep.equal(expectedResult);
    });
});
