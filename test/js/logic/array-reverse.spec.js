/**
 * array-reverse.spec.js
 *
 * Test harness for binary search algorithm
 */
/* Dependencies */
import { expect } from 'chai';
import { reverseArray, reverseArrayBuffer, reverseArrayInplace } from '../../../problems/js/logic/array-reverse.js';

/* Test Cases */
describe('Logic: Array Reverse', function () {
    it('should reverse an array using the JS API', function () {
        const testArray = [1, 2, 3];
        const reverseTestArray = [3, 2, 1];
        expect(reverseArray(testArray)).to.deep.equal(reverseTestArray);
    });

    it('should reverse an array iteratively', function () {
        const testArray = [1, 2, 3];
        const reverseTestArray = [3, 2, 1];
        expect(reverseArrayBuffer(testArray)).to.deep.equal(reverseTestArray);
    });

    it('should reverse an array in place without a buffer', function () {
        const testArray = [1, 2, 3];
        const reverseTestArray = [3, 2, 1];
        expect(reverseArrayInplace(testArray)).to.deep.equal(reverseTestArray);
    });
});
