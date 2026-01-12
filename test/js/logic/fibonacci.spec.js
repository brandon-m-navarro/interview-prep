/**
 * fibonacci.spec.js
 *
 * Test harness for fibonacci functions
 */
/* Dependencies */
import { assert } from 'chai';
import { fibonacciIterative, fibonacciRecursive } from '../../../problems/js/logic/fibonacci.js';

/* Test Cases */
describe('Logic: Fibonacci', function () {
    // First 10 of fibinacci sequence
    // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

    const input1 = 0;
    const expectedRes1 = 0;
    const input2 = 4;
    const expectedRes2 = 3;
    const input3 = 10;
    const expectedRes3 = 55;

    it('should handle calculating fibonacci iteratively', function () {
        assert.equal(fibonacciIterative(input1), expectedRes1);
        assert.equal(fibonacciIterative(input2), expectedRes2);
        assert.equal(fibonacciIterative(input3), expectedRes3);
    });

    it('should handle calculating fibonacci recursively', function () {
        assert.equal(fibonacciRecursive(input1), expectedRes1);
        assert.equal(fibonacciRecursive(input2), expectedRes2);
        assert.equal(fibonacciRecursive(input3), expectedRes3);
    });
});
