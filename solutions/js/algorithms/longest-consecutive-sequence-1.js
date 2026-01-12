/**
 * Longest Consecutive Sequence
 *
 * Given a sorted array of unique integers nums, return the length of the
 * longest consecutive elements sequence. NOTE: This means the numbers will
 * appear IN ORDER. [1, 2, 5, 6, 3, 4, 5] -> 3 ([3, 4, 5]). Look at the
 * associated test file for more examples.
 * 
 * Constraints:
 *   0 <= nums.length <= 10^5
 *   -10^9 <= nums[i] <= 10^9
 */


export default function findLongestConsecutiveSequence(nums) {
    let maxSequenceLength = 0,
        currentSequenceLength = 0,
        currentVal = null;

    for (let i=0; i<nums.length; i++) {

        // Is the current value sequential?
        if (nums[i] === currentVal+1) {
            currentVal++;
            currentSequenceLength++;
        } else {
            // Not sequential, so reset currentVal and currentSequenceLength
            currentVal = nums[i];
            currentSequenceLength = 1;
        }

        // Has currentSequenceLength surpassed maxSequenceLength
        if (currentSequenceLength > maxSequenceLength) {
            maxSequenceLength = currentSequenceLength;
        }
    }

    return maxSequenceLength;
}
