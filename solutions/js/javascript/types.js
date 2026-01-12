// What is the value of boolean in the expression below?
// let boolean = [1,2,3] === [1,2,3];
/**
 * boolean will be 'false' since JavaScript compares objects by reference,
 * not value. This is a common mistake, and is why in the testing files
 * assert.equal() cannot be used, and instead expect().to.deep.equal() is.
 */

// What are the 7 primitive types in JavaScript?
/** https://developer.mozilla.org/en-US/docs/Glossary/Primitive
 * string
 * number
 * bigint
 * boolean
 * undefined
 * symbol
 * null
 * 
 * Note:
 *   Primitives have no methods but still behave as if they do. When properties
 *   are accessed on primitives, JavaScript auto-boxes the value into a wrapper
 *   object and accesses the property on that object instead. For example,
 *   "foo".includes("f") implicitly creates a String wrapper object and calls
 *   String.prototype.includes() on that object.
 */

// What is polymorphism?
/**
 * https://developer.mozilla.org/en-US/docs/Glossary/Polymorphism
 * Polymorphism is the presentation of one interface for multiple data types.
 * 
 * For example, integers, floats, and doubles are implicitly polymorphic:
 * regardless of their different types, they can all be added, subtracted,
 * multiplied, and so on.
 */
