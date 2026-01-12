/**
 * Minimum-Sized Subarray Sum
 *
 * Given an array of positive integers nums and a positive integer target,
 * return the minimal length of a subarray whose sum is greater than or equal
 * to target. If there is no such subarray, return 0 instead.
 *
 * A subarray is a contiguous non-empty sequence of elements within an array.
 * 
 * Constraints:
 *  1 <= target <= 10^9
 *  1 <= nums.length <= 10^5
 *  1 <= nums[i] <= 10^4
 * 
 * Follow up: If you have figured out the O(n) solution, try coding another
 * solution of which the time complexity is O(n log(n)).
 */

export default function getMinSizeSubarraySum(target, nums) {
    let left = 0;
    let currentTotal = 0;
    let minRange = nums.length + 1;

    for (let right = 0; right < nums.length; right++) {
        currentTotal = currentTotal + nums[right];

        while (currentTotal >= target) {
            minRange = Math.min(minRange, right - left + 1);
            currentTotal = currentTotal - nums[left];
            left++;
        }
    }

    if (minRange === nums.length + 1) return 0;

    return minRange;
}
