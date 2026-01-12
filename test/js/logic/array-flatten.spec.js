/**
 * array-flatten.spec.js
 *
 * Test harness for array flatten functions
 */
/* Dependencies */
import { expect } from 'chai';
import { flattenArrayImperative, flattenArrayFunctional } from '../../../problems/js/logic/array-flatten.js';

/* Test Cases */
describe('Logic: Array Flatten', function () {
    const mdArray = [1, 2, [3, 4, [5, 6, [7]], 8], [9]];
    const flatArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    it('should flatten an array in an imperative style', function () {
        expect(flattenArrayImperative(mdArray)).to.deep.equal(flatArray);
    });

    it('should flatten an array in a functional style', function () {
        expect(flattenArrayFunctional(mdArray)).to.deep.equal(flatArray);
    });
});
