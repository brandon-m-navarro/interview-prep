/**
 * pascals-triangle.spec.js
 *
 * Test harness for Pascal's Triangle problem
 */
/* Dependencies */
import { expect } from 'chai';
import pascalsTriangle from '../../../problems/js/logic/pascals-triangle.js';

/* Test Cases */
describe('Logic: Pascal\'s Triangle', function () {
    it('should return the first row of pascal\'s triangle', function () {
        expect(pascalsTriangle(0)).to.deep.equal([1]);
    });

    it('should return the second row of pascal\'s triangle', function () {
        expect(pascalsTriangle(1)).to.deep.equal([1, 1]);
    });

    it('should return the third row of pascal\'s triangle', function () {
        expect(pascalsTriangle(2)).to.deep.equal([1, 2, 1]);
    });

    it('should return the seventh row of pascal\'s triangle', function () {
        expect(pascalsTriangle(6)).to.deep.equal([1, 6, 15, 20, 15, 6, 1]);
    });
});
