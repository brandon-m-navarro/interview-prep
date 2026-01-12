/**
 * greatest-prime-factor.js
 * 
 * Write a function that finds the greatest prime factor of a number n.
 * 
 * The greatest prime factor of a number is the largest prime number that
 * divides evenly into that number.
 * 
 * The number 1 has no prime factors as 1 is not a prime number, similarly,
 * 0 is divisible by every prime number. This means in both cases, the answer
 * is undefined.
 * 
 * Constraints:
 *  n is an integer
 *  1 < n
 */

export default function greatestPrimeFactor(n) {
    let i = 2;
    while (i <= n) {
        if (n % i === 0) {
            n = n / i;
        } else {
            i++;
        }
    }
    return i;
}
