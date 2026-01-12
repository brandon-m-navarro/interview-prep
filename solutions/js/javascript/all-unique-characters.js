/**
 * Implement an algorithm to determine if a string has
 * all unique characters.
 */

export default function hasAllUniques(str) {
    return str.length === new Set(str.split('')).size;
}

/**
 * A HashTable could be used if you wanted, but using a Set seems more
 * JavaScript to me, and can be one-lined.
 */
