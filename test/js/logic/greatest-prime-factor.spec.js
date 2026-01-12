/**
 * greatest-prime-factor.spec.js
 *
 * Test harness for greatestPrimeFactor function
 */
/* Dependencies */
import greatestPrimeFactor from '../../../problems/js/logic/greatest-prime-factor.js';
import { assert } from 'chai';

/* Test Cases */
describe("Logic: Greatest Prime Factor", function () {

    it("should pass test #1", function () {
        assert.equal(greatestPrimeFactor(12), 3);
    });

    it("should pass test #2", function () {
        assert.equal(greatestPrimeFactor(15), 5);
    });

    it("should pass test #3", function () {
        assert.equal(greatestPrimeFactor(2), 2);
    });

    it("should pass test #4", function () {
        assert.equal(greatestPrimeFactor(44100), 7);
    });

    it("should fail #5 with an incorrect answer", function () {
        assert.notEqual(greatestPrimeFactor(2), 1);
    });

    it("should fail #6 with an incorrect answer", function () {
        assert.notEqual(greatestPrimeFactor(15), 3);
    });
})
