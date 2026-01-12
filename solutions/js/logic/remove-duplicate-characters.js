/**
 * Remove Duplicate Characters
 * 
 * Write a function that removes any duplicate characters from a string.
 */

export default function removeDuplicateCharacters(s) {
    return [...new Set(s)].join('');
}
