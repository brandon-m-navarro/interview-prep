/**
 * Two Sum 
 *
 * Given an array of integers nums and an integer target, return indices of
 * the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you
 * may not use the same element twice.
 * 
 * You can return the answer in any order.
 *
 * Constraints:
 *  2 <= nums.length <= 104
 *  -109 <= nums[i] <= 109
 *  -109 <= target <= 109
 *  Only one valid answer exists.
 */

export default function twoSum(nums, target) {

    // Use hashmap for O(n)
    const map = {};

    for (let i=0; i<nums.length; i++) {

        // Calculate complement
        const diff = target - nums[i];

        // Check if complement exists
        if (map.hasOwnProperty(diff)) {
            return [map[diff], i];
        }

        // Store for future lookups O(1)
        map[nums[i]] = i;
    }
}
