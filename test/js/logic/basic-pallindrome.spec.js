/**
 * basic-pallindrome.spec.js
 * 
 * Test harness for isPallindrome function
 */
/* Dependencies */
import isPallindrome from "../../../problems/js/logic/basic-pallindrome.js";
import { assert } from 'chai';

describe("Logic: Pallindrome", function () {

    it("should be true for racecar", function () {
        assert.equal(isPallindrome("racecar"), true);
    });

    it("should be true for wow", function () {
        assert.equal(isPallindrome("wow"), true);
    });

    it("should be false for brandon", function () {
        assert.equal(isPallindrome("brandon"), false);
    });
});
