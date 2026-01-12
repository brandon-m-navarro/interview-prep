/**
 * all-unique-characters.spec.js
 *
 * Test harness for string manipulation functions
 */
/* Dependencies */
import { assert } from 'chai';
import hasAllUniques from '../../../problems/js/javascript/all-unique-characters.js';

/* Test Cases */
describe('JavaScript: hasAllUniques', function () {
    it('should default handle string lengths of 0 and 1', function () {
        const emptyStr = '';
        const oneCharStr = 'a';
        assert.equal(hasAllUniques(emptyStr), true);
        assert.equal(hasAllUniques(oneCharStr), true);
    });

    it('should be able to tell if a string has all unique characters', function () {
        const uniqueStr = 'abcdefg';
        const dupeStr = 'abcdefga';
        assert.equal(hasAllUniques(uniqueStr), true);
        assert.equal(hasAllUniques(dupeStr), false);
    });
});
