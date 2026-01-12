/**
 * binary-search.spec.js
 *
 * Test harness for binary search algorithm
 */
/* Dependencies */
import { assert } from 'chai';
import binarySearch from '../../../problems/js/algorithms/binary-search.js';

/* Test Cases */
describe('Algorithms: Binary Search', function () {
    it('should return -1 for an empty array', function () {
        const searchArr = [],
              target = 5,
              ans = -1;

        // no element exists in searchArr, so ans must be -1
        assert.equal(binarySearch(searchArr, target), ans);
    });

    it('should find the element if it exists', function () {
        const searchArr = [-1,0,3,5,9,12],
              target = 9,
              ans = 4;

        // 9 exists in searchArr and its index is 4
        assert.equal(binarySearch(searchArr, target), ans);
    });

    it('should return -1 if the element doesn\'t exists', function () {
        const searchArr = [-1,0,3,5,9,12],
              target = 2,
              ans = -1;

        // 2 does not exist in searchArr so return -1
        assert.equal(binarySearch(searchArr, target), ans);
    });
});

