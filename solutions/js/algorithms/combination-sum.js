/**
 * Combination Sum
 * 
 * Given an array of distinct integers candidates and a target integer
 * target, return a list of all unique combinations of candidates where the
 * chosen numbers sum to target. You may return the combinations in any order.
 *
 * The same number may be chosen from candidates an unlimited number of times.
 * Two combinations are unique if the frequency of at least one of the chosen
 * numbers is different. The frequency of an element x is the number of times
 * it occurs in the array.
 * 
 * The test cases are generated such that the number of unique combinations
 * that sum up to target is less than 150 combinations for the given input.
 *
 * Constraints:
 *  1 <= candidates.length <= 30
 *  2 <= candidates[i] <= 40
 *  All elements of candidates are distinct.
 *  1 <= target <= 40
 */


// This is a classic backtracking problem.
// The key characteristics that suggest backtracking:
//      - "Find all possible combinations/permutations" -
//          When the problem asks for exhaustive enumeration
// 
//      - "Return a list of all unique combinations" -
//          Explicitly asking for enumeration
// 
//      - Constraints are small (like target ≤ 40) -
//          Backtracking is feasible
// 
//      - "Unlimited number of times" or "choose/not choose" decisions
// 
//      - Depth-first search pattern -
//          Explore one path fully, then backtrack

export default function combinationSum(candidates, target) {
    const result = [];

    // Sort candidates to help with early termination
    candidates.sort((a, b) => a - b);

    // Going to use recursive DFS approach, so need to scope properly
    function backtrack(remaining, currentCombination, startIndex) {

        // Base case: valid combination found
        if (remaining === 0) {
            result.push([...currentCombination]);
            return;
        }

        // Try each candidate starting from startIndex
        for (let i=startIndex; i<candidates.length; i++) {
            const candidate = candidates[i];

            // Since array is sorted, we can break early if
            // candidate > remaining
            if (candidate > remaining) {
                break;
            }

            // Choose candidate
            currentCombination.push(candidate);

            // Recurse with reduced target, allowing reuse of same candidate
            // (i, not i+1)
            backtrack(remaining - candidate, currentCombination, i);

            // Backtrack: remove last choice
            currentCombination.pop();
        }
    }

    backtrack(target, [], 0);
    return result;
}

/**
 * Still struggling? Here's a cheatsheat for backtracking problems:
 */
// function backtrackTemplate(path, options, startIndex) {
//     if (/* base case: found valid solution */) {
//         result.push([...path]);
//         return;
//     }
//
//     for (let i = startIndex; i < options.length; i++) {
//         // Prune invalid branches early if possible
//         if (/* invalid condition */) continue;
//
//         // Choose
//         path.push(options[i]);
//
//         // Explore (note: i or i+1 depending on reuse)
//         backtrack(path, options, i); // i for reuse, i+1 for no reuse
//
//         // Unchoose (backtrack)
//         path.pop();
//     }
// }

/**
 * Remember everything anything implemented in a recursive manner can also be
 * done in an iterative manner. Here's an example solution using a Stack
 * data-structure.
 */
function combinationSumIterative(candidates, target) {
    const result = [];
    candidates.sort((a, b) => a - b);
    
    // Stack stores: [remaining, currentCombination, startIndex]
    const stack = [[target, [], 0]];
    
    while (stack.length > 0) {
        const [remaining, current, startIndex] = stack.pop();

        if (remaining === 0) {
            result.push([...current]);
            continue;
        }

        // Process candidates in reverse so we get same order as recursive
        for (let i = startIndex; i < candidates.length; i++) {
            if (candidates[i] > remaining) break;

            // Push new state to stack
            const newCombination = [...current, candidates[i]];
            stack.push([remaining - candidates[i], newCombination, i]);
        }
    }

    return result;
}
