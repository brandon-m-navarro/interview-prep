/**
 * two-sum.spec.js
 *
 * Test harness for two sum
 */
/* Dependencies */
import { expect } from 'chai';
import twoSum from '../../../problems/js/logic/two-sum.js';

describe('Logic: Two Sum', function () {
    it('should handle the first example', function () {
        expect(twoSum([2, 7, 11, 15], 9)).to.deep.equal([0, 1]);
    });

    it('should handle the second example', function () {
        expect(twoSum([3, 2, 4], 6)).to.deep.equal([1, 2]);
    });

    it('should handle the third example', function () {
        expect(twoSum([3, 3], 6)).to.deep.equal([0, 1])
    });
});
