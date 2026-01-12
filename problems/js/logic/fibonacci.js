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
