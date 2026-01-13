/**
 * Merge Sort
 * 
 * Given an unordered array of integers, sort them into ascending order. Your
 * algorithm should take a recursive approach, and follow these steps:
 * 
 * 1. Divide: Split the problem into smaller subproblems
 * 2. Conquer: Solve the subproblems recursively
 * 3. Combine: Merge the solutions to solve the original problem
 * 
 * What is the time & space complexity of your solution, and why?
 */

export default function mergesort (arr) {

    // Base case: array already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Split array in half
    let mid = Math.floor(arr.length / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid, arr.length),
        leftSorted = mergesort(left),
        rightSorted = mergesort(right);

    return merge(leftSorted, rightSorted);
}

// Given two sorted arrays, return a single sorted array
const merge = function (left, right) {

    let i = 0,
        j = 0,
        ret = [];

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            ret.push(left[i]);
            i++;
        } else {
            ret.push(right[j]);
            j++;
        }
    }

    // Check which array still has elements
    if (i < left.length) {
        while (i < left.length) {
            ret.push(left[i]);
            i++;
        }
    } else {
        while (j < right.length) {
            ret.push(right[j]);
            j++;
        }
    }

    return ret;
}

/**
 * Time Complexity: O(n log n)
 * 
 *  Division levels: 
 *      - Level 1: Divide n elements → 2 arrays of n/2
 *      - Level 2: Divide n/2 elements → 4 arrays of n/4
 *      - ...
 *      - Continue until arrays of size 1
 * 
 *  Number of division levels: log₂n
 * 
 *  Work at each level:
 *      - Level 1: Merge 2 arrays of n/2 → O(n) work
 *      - Level 2: Merge 4 arrays of n/4 → O(n) work
 *      - ...
 *      - Each level does O(n) work
 * 
 * Total: O(n) work × log n levels = O(n log n)
 * 
 * Space Complexity:
 *      Auxiliary Space: O(n) - need temporary arrays for merging
 *      Stack Space: O(log n) - recursion depth
 */