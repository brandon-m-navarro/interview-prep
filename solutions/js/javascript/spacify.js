/**
 * Define a `spacify` function which takes a string as an argument
 * and returns the same string, but with each character separated by a space.
 */

export default function spacify(str) {
    return str.split('').join(' ');
}

/**
 * Create the same `spacify` function, but add it directly as a method to the `String` object.
 * Talk about this practice as it relates to building real applications.
 */
String.prototype.spacify = function () {
    return this.split('').join(' ');
};

// Developers should never modify JavaScript native prototypes.
// Modifying natives can cause forward and backward compatibility problems
// and can cause conflicts with 3rd party code.