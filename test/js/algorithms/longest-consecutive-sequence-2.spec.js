/**
 * longest-consecutive-sequence.spec.js
 *
 * Test harness for longest consecutive sequence
 */
/* Dependencies  */
import { assert } from 'chai';
import findLongestConsecutiveSequence from '../../../problems/js/algorithms/longest-consecutive-sequence-2.js';

describe('Algorithms: Longest Consecutive Sequence (Unsorted, Not Unique)', function () {
    it('should handle test case #1', function () {
        assert.equal(findLongestConsecutiveSequence([100, 4, 200, 1, 3, 2]), 4)
    });

    it('should handle test case #2', function () {
        assert.equal(findLongestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]), 9);
    });

    it('should handle test case #3', function () {
        assert.equal(findLongestConsecutiveSequence([1,0,1,2]), 3);
    });

    it('should handle test case #4', function () {
        assert.equal(findLongestConsecutiveSequence([0,-1]), 2);
    });
});
