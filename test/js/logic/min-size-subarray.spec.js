/**
 * min-size-subarray-sum.spec.js
 *
 * Test harness for minimum sized subarray function
 */
/* Dependencies */
import { assert } from 'chai';
import getMinSizeSubarraySum from '../../../problems/js/logic/min-size-subarray.js';

describe('Logic: Minimum Size Subarray Sum', function () {
    it('should pass test #1', function () {
        assert.equal(getMinSizeSubarraySum(7, [2, 3, 1, 2, 4, 3]), 2);
    });

    it('should pass test #2', function () {
        assert.equal(getMinSizeSubarraySum(4, [1,4,4]), 1);
    });

    it('should pass test #3', function () {
        assert.equal(getMinSizeSubarraySum(11, [1,1,1,1,1,1,1,1]), 0);
    });

});
