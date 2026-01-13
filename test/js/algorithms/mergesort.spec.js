/**
 * mergesort.spec.js
 *
 * Test harness for merge sort
 */
/* Dependencies  */
import { expect } from 'chai';
import mergesort from '../../../problems/js/algorithms/mergesort.js';

describe('Algorithms: MergeSort', function () {
    it('should handle an empty array', function () {
        expect(mergesort([])).to.deep.equal([]);
    });

    it('should handle a single element', function () {
        expect(mergesort([1])).to.deep.equal([1]);
    });

    it('should handle two elements that are already sorted', function () {
        expect(mergesort([5, 7])).to.deep.equal([5, 7]);
    });

    it('should handle two unsorted elements', function () {
        expect(mergesort([7, 5])).to.deep.equal([5, 7]);
    });

    it('should handle an odd length array', function () {
        expect(mergesort([38, 27, 43, 3, 9])).to.deep.equal([3, 9, 27, 38, 43]);
    });

    it('should handle an even length array', function () {
        expect(mergesort([38, 27, 43, 3, 9, 8])).to.deep.equal([3, 8, 9, 27, 38, 43]);
    });

    it('should handle an already sorted array', function () {
        expect(mergesort([1, 2, 3, 4, 5, 6, 7, 8])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('should handle an array with duplicates', function () {
        expect(mergesort([1, 2, 8, 4, 4, 4, 7, 3])).to.deep.equal([1, 2, 3, 4, 4, 4, 7, 8]);
    });
    
    it('should handle a larger array', function () {
        expect(mergesort([42, 17, 89, 23, 56, 71, 34, 92, 15, 68, 29, 83, 47, 12, 60, 5, 78, 31, 99, 20])).to.deep.equal([5, 12, 15, 17, 20, 23, 29, 31, 34, 42, 47, 56, 60, 68, 71, 78, 83, 89, 92, 99]);
    });
});
