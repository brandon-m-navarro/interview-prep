/**
 * Longest Consecutive Sequence
 *
 * Given an unsorted array of integers nums, return the length of the longest
 * consecutive elements sequence that can be formed.
 * 
 * NOTE: This doesn't necessarily mean the numbers appear in order [1, 2, 3...]
 * in the nums array, but that a sequence can be formed:
 * [1, 100, 2, 100, 3] -> 3 ([1, 2, 3]).
 *
 * The algorithm should run in O(n) time.
 * 
 * Constraints:
 *   0 <= nums.length <= 10^5
 *   -10^9 <= nums[i] <= 10^9
 */

export default function findLongestConsecutiveSequence(nums) {

    if (nums.length === 0) return 0;

    // Create a Set to get a 'Map' of all numbers with no duplicates
    let numsSet = new Set(nums),
        longestStreak = 0;

    // Loop through set
    for (const num of numsSet) {

        // This check prevents worst-case scenario (resulting in O(n^2)).
        // Without this check, the same streak (length n) would be counted
        // n amount of times. Check bottom of file for example
        if (!numsSet.has(num-1)) {
            let currentNum = num,
                currentStreak = 1;
    
            while (numsSet.has(currentNum + 1)) {
                currentStreak++;
                currentNum++;
            }
    
            longestStreak = Math.max(currentStreak, longestStreak);
        }
    }

    return longestStreak;
}

/**
 * Example to show how missing numSet.has(nums-1) prevents O(n^2):
 * 
 *      nums = [100, 4, 200, 1, 3, 2]
 * 
 *      WITHOUT CHECK:
 * 
 *          100 counts: 100 (no 101) → streak 1
 *          4 counts: 4, 3, 2, 1 (then 5 not in set) → streak 4
 *          200 counts: 200 (no 201) → streak 1
 *          1 counts: 1, 2, 3, 4 (then 5 not in set) → streak 4 (duplicate work!)
 *          3 counts: 3, 2, 1, 4 (then 5 not in set) → streak 4 (duplicate work!)
 *          2 counts: 2, 1, 3, 4 (then 5 not in set) → streak 4 (duplicate work!)
 * 
 *              Total: Lots of repeated work!
 * 
 *      WITH CHECK:
 *
 *          100: 100-1=99 not in set → count: 100 → streak 1
 *          4: 4-1=3 IS in set → skip!
 *          200: 200-1=199 not in set → count: 200 → streak 1
 *          1: 1-1=0 not in set → count: 1, 2, 3, 4 → streak 4
 *          3: 3-1=2 IS in set → skip!
 *          2: 2-1=1 IS in set → skip!
 *
 *              Total: Each sequence is counted exactly once!
 */