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

// O(n) solution (sliding window)
export default function getMinSizeSubarray(target, nums) {
    let minLength = Infinity;
    let windowSum = 0;
    let left = 0;
    
    for (let right=0; right<nums.length; right++) {
        // Expand the window by adding the current element
        windowSum += nums[right];
        
        // Shrink the window from the left while the sum is >= target
        while (windowSum >= target) {
            // Update the minimum length
            minLength = Math.min(minLength, right - left + 1);
            
            // Shrink the window by removing the leftmost element
            windowSum -= nums[left];
            left++;
        }
    }
    
    return minLength === Infinity ? 0 : minLength;
}

// O(n log n) solution (prefix sums combined with binary search)
export default function getMinSizeSubarrayOnlogn(target, nums) {

    const n = nums.length,
          prefixSum = new Array(n+1).fill(0);

    // Step 1: Build prefix sums
    // prefixSum[i] = sum of nums[0] to nums[i-1]
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }
    
    let minLength = Infinity;
    
    // Step 2: For each starting position, binary search for ending position
    for (let i = 0; i < n; i++) {
        // We're looking for the smallest j where
        // prefixSum[j] - prefixSum[i] >= target
        // This is equivalent to prefixSum[j] >= target + prefixSum[i]
        const neededSum = target + prefixSum[i];

        // Binary search for the first prefixSum[j] >= neededSum
        let left = i + 1;  // j must be > i
        let right = n;     // inclusive end
        let found = false;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (prefixSum[mid] >= neededSum) {
                // Found a valid ending position
                minLength = Math.min(minLength, mid - i);
                found = true;

                // Try to find an even earlier position
                right = mid - 1;
            } else {
                // Sum is too small, need larger ending position
                left = mid + 1;
            }
        }
    }
    
    return minLength === Infinity ? 0 : minLength;
}
