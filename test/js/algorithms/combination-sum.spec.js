/**
 * combination-sum.spec.js
 *
 * Test harness for Combination Sum problem
 */
/* Dependencies  */
import { expect } from 'chai';
import combinationSum from '../../../problems/js/algorithms/combination-sum.js';

/* Test Cases */
describe('Algorithms: Combination Sum', function () {
    it('should handle a single candidate', function () {
        expect(combinationSum([2], 1)).to.deep.equal([]);
    });

    it('should handle a multiple candidates resulting in two combinations', function () {
        // 2 and 3 are candidates, and 2 + 2 + 3 = 7.
        // ** Note that 2 can be used multiple times. **
        // 7 is a candidate, and 7 = 7.
        // These are the only two combinations.
        expect(combinationSum([2, 3, 6, 7], 7)).to.deep.equal([[2,2,3],[7]]);
    });

    it('should handle a multiple candidates resulting in more than two combinations', function () {
        expect(combinationSum([2, 3, 5], 8)).to.deep.equal([[2, 2, 2, 2], [2, 3, 3], [3, 5]]);
    });
});
