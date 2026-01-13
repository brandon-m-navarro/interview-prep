/**
 * Fibonacci
 * 
 * Write two functions that compute the nth number of Fibonacci.
 * 
 * The first function should take an iterative approach, and the second a
 * recursive.
 */

// Iterative
export function fibonacciIterative(n) {
    if (n === 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    }

    let seq = [0, 1];
    for (let i=2; i<=n; i++) {
        seq.push(seq[i-2] + seq[i-1]);
    }

    return seq.pop();
}

// Recursive
export function fibonacciRecursive(n) {
    
    // Base case
    if (n === 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    }

    return fibonacciRecursive(n-2) + fibonacciRecursive(n-1);
}

// Original solution is O(2^n), if memoization is used, can reduce to O(n)
export function memoFibonacci(n, memo={}) {
    if (typeof memo[n] !== 'undefined') {
        return memo[n];
    }

    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }

    memo[n] = memoFibonacci(n-1, memo) + memoFibonacci(n-2, memo);
    return memo[n];
}