/**
 * Write a function to check if a string is a basic pallindrome.
 * A basic palindrome is defined by a single word string that is
 * the same forwards as it is backwards.
 * 
 * Constraints:
 *  1 <= input.length <= 2 * 105
 *  input consists only of printable ASCII characters.
 */

// O(n) time O(1) space ***winner***
export default function isPallindrome(input) {
    let end = input.length-1,
        start = 0;

    while (start < end) {
        if (input[start] !== input[end]) {
            return false
        }
        start++;
        end--;
    }

    return true;
}

// O(n) time O(n) space
export default function isPallindromeOnSpace(input) {
    if (input.length === 0 || input.length === 1) {
        return true;
    }

    const reverseString = input.split('').reverse().join('');

    if (reverseString === input) {
        return true;
    }

    return false;
}

// O(n) time O(2n) space
export default function isPallindromeOn2Space(input) {
    let inputSplit = input.split(''),
        reversedArray = inputSplit.toReversed(),
        isPal = true;
    
    for (let i=0; i<inputSplit.length; i++) {
        if (inputSplit[i] !== reversedArray[i]) {
            isPal = false;
        }
    }

    return isPal;
}
