/* eslint-disable */

/**
 * What will the result of the following be?
 */
const User = {
    count: 1,
    getCount() {
        return this.count;
    },
};

console.log(User.getCount());

var func = User.getCount;
console.log(func());

/**
 * How would you ensure that the context of func() is always
 * bound to User so that 1 will be returned?
 */

/**
 * What is the key difference between defining a variable with `var` vs `let`?
 */

/**
 * What will be the output of the console.log below?
 */
let arr = [1, 2, 3],
    arrTemp = arr;

arr.pop();

console.log(arrTemp);

// How can you safely make a deep-copy of the array?

/**
 * You are trying to create an array that is length `arrayLength`, with each
 * entry initialized to it's index. Ex: arrayLength = 5 > [0, 1, 2, 3, 4].
 * 
 * What is the issue with the statement below? What would filledArr log to?
 */
const filledArr = Array(arrayLength).map((val, index) => index);
console.log(filledArr);

/* eslint-enable */
