/**
 * longest-consecutive-sequence-1.spec.js
 *
 * Test harness for longest consecutive sequence 1
 */
/* Dependencies  */
import { assert } from 'chai';
import findLongestConsecutiveSequence from '../../../solutions/js/algorithms/longest-consecutive-sequence-1.js';

describe('Algorithms: Longest Consecutive Sequence (Sorted, Unique)', function () {
    it('should handle test case #1', function () {
        assert.equal(findLongestConsecutiveSequence([ 1, 3, 2]), 1)
    });

    it('should handle test case #2', function () {
        assert.equal(findLongestConsecutiveSequence([0, 2, 4, 7, 8, 9, 11]), 3);
    });

    it('should handle test case #3', function () {
        assert.equal(findLongestConsecutiveSequence([-100 -99, -50, -49, 0, 1, 3, 5, 6, 7]), 3);
    });

    it('should handle test case #4', function () {
        assert.equal(findLongestConsecutiveSequence([]), 0);
    });
});
