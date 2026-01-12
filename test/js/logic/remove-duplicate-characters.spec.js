/**
 * remove-duplicate-characters.spec.js
 * 
 * Test harness for remove duplicate characters problem
 */
/* Dependencies */
import { assert } from "chai";
import removeDuplicateCharacters from "../../../problems/js/logic/remove-duplicate-characters.js";

describe("Logic: Remove Duplicate Characters", function () {

    it("should pass test #1", function () {
        assert.equal(removeDuplicateCharacters("abbc"), "abc");
    });

    it("should pass test #2", function () {
        assert.equal(removeDuplicateCharacters("aabbcccagh"), "abcgh");
    });

});
