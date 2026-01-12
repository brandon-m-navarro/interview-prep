/**
 * Write two functions that flatten a multi-dimensional array of unknown
 * depth and composition into a one-dimensional array.
 *
 * The first solution should take a functional approach, using JS built-in
 * methods.
 *
 * The second solution should take an imperative approach.
 */

// Functional solution
export function flattenArrayFunctional(arr) {
    return arr.reduce(
        (flat, toFlatten) =>
            flat.concat(
            Array.isArray(toFlatten) ? flattenArrayFunctional(toFlatten) : toFlatten
        ),
        []
    );
}

// Imperative solution
export function flattenArrayImperative(input) {
    const ret = [];

    for (let i=0; i<input.length; i++) {

        // For nested arrays, recurse
        if (input[i].constructor === Array) {

            // This allows us to save the results from recursive calls
            // and eventually pass-up the flattened values
            const smallerArray = flattenArrayImperative(input[i]);

            // Loop through nested array and push each value
            for (let j=0; j<smallerArray.length; j++) {
                ret.push(smallerArray[j]);
            }
        } else {
            ret.push(input[i]);
        }
    }

  return ret;
}
