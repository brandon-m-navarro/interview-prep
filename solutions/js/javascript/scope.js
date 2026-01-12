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

console.log(User.getCount()); // Prints 1

var func = User.getCount;
console.log(func()); // Prints undefined

/**
 * How would you ensure that the context of func() is always
 * bound to User so that 1 will be returned?
 */
var func = User.getCount.bind(User);
console.log(func()); // Prints 1

/**
 * What is the key difference between defining a variable with `var` vs `let`?
 * 
 * The primary differences between let and var in JavaScript lie in their
 * scope, hoisting behavior, and redeclaration rules. Variables declared with
 * let are block-scoped, meaning they are only accessible within the block
 * (e.g., {}) where they are defined, while var variables are function-scoped
 * or globally scoped, allowing access from anywhere within the function or
 * globally.
 * 
 * This block scoping prevents unintended variable access and reduces bugs,
 * especially in loops and conditionals.
 * 
 * var variables are hoisted to the top of their scope and initialized with
 * undefined, allowing them to be used before declaration without causing an
 * error—though they will log as undefined.
 * 
 * In contrast, let variables are also hoisted but remain in a
 * "temporal dead zone" until their declaration is reached, so accessing them
 * before declaration throws a ReferenceError.
 * 
 * Additionally, var allows redeclaration of the same variable within the same
 * scope, which can lead to unexpected behavior, while let does not permit
 * redeclaration and will throw a SyntaxError if attempted.
 * 
 * This makes let safer and more predictable, especially in modern JavaScript
 * development.
 */

/**
 * What will be the output of the console.log below?
 */
let arr = [1, 2, 3],
    arrTemp = arr;

arr.pop();

console.log(arrTemp); // [1, 2] because arrTemp is a reference to arr, meaning
                      // updates to arr will directly update arrTemp

// How can you safely make a deep-copy of the array?
let arrTemp1 = JSON.parse(JSON.stringify(arr));

// This method has limitations, as it cannot handle non-serializable data
// such as functions, Symbols, or objects with circular references

/**
 * You are trying to create an array that is length `arrayLength`, with each
 * entry initialized to it's index. Ex: arrayLength = 5 > [0, 1, 2, 3, 4].
 * 
 * What is the issue with the statement below? What would filledArr log to?
 */
const arrayLength = 5,
      filledArr = Array(arrayLength).map((val, index) => index);
console.log(filledArr);

// Array(arrayLength) creates an array of creates [empty × arrayLength]
// (sparse array). map() will skip over empty entries, so if we want this
// to work as expected, we need to call .fill() to initialize some values.
filledArr = Array(arrayLength).fill().map((val, index) => index);


/* eslint-enable */
