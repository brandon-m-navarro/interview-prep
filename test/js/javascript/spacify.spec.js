/**
 * spacify.spec.js
 *
 * Test harness for spacify function
 */
/* Dependencies */
import { assert } from 'chai';
import spacify from '../../../solutions/js/javascript/spacify.js';

/* Test Cases */
describe('JavaScript: Spacify', function () {
    it('should return original string for lengths 0 and 1', function () {
        const emptyStr = '';
        const oneLetterStr = 'a';
        assert.equal(spacify(emptyStr), emptyStr);
        assert.equal(spacify(oneLetterStr), oneLetterStr);
    });

    it('should add spaces between the characters of a string', function () {
        const exampleStr = 'abcdef';
        const expectedResult = 'a b c d e f';
        assert.equal(spacify(exampleStr), expectedResult);
    });

    it('should know how to handle spaces', function () {
        const exampleStr = 'abc def';
        const expectedResult = 'a b c   d e f';
        assert.equal(spacify(exampleStr), expectedResult);
    });

    it('longer input for timing', function () {
        const exampleStr = 'abc def qwertyuiopqwertyuiopqwertyuiop';
        const expectedResult = 'a b c   d e f   q w e r t y u i o p q w e r t y u i o p q w e r t y u i o p';
        assert.equal(spacify(exampleStr), expectedResult);
    });
});
