/**
 * Write a function to reverse an array.
 */
export function reverseArray(arr) {
    return arr.reverse();
}

/**
 * Now do it without using any array API methods.
 */
export function reverseArrayBuffer(arr) {
    const buffer = [];
    for (let i=arr.length-1; i>=0; i--) {
        buffer.push(arr[i]);
    }
    return buffer;
}

/**
 * Now do it without a buffer
 */
export function reverseArrayInplace(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // Swap elements
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        
        left++;
        right--;
    }
    return arr;
}
