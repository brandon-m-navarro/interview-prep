/**
 * word-search.spec.js
 *
 * Test harness for word search
 */
/* Dependencies  */
import { assert } from 'chai';
import wordSearch from '../../../problems/js/algorithms/word-search.js';

describe('Algorithms: Word Search', function () {
    it('should find word #1', function () {
        const board = [
            ['A', 'B', 'C', 'E'],
            ['S', 'F', 'C', 'S'],
            ['A', 'D', 'E', 'E'],
        ];
        const word = 'ABCCED';
        assert.equal(wordSearch(board, word), true);
    });

    it('should find word #2', function () {
        const board = [
            ['A', 'B', 'C', 'E'],
            ['S', 'F', 'C', 'S'],
            ['A', 'D', 'E', 'E'],
        ];
        const word = 'SEE';
        assert.equal(wordSearch(board, word), true);
    });

    it('should fail to find word', function () {
        const board = [
            ['A', 'B', 'C', 'E'],
            ['S', 'F', 'C', 'S'],
            ['A', 'D', 'E', 'E'],
        ];
        const word = 'ABCB';
        assert.equal(wordSearch(board, word), false);
    });
});
