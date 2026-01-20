### Challenge 1: Array Reversal In-Place
```
function reverseArrayInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        // Swap elements
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        
        left++;
        right--;
    }
}
```

**Questions:**
1. What is the key invariant that ensures this algorithm correctly reverses the array?
2. How does this invariant relate to the variables `left` and `right`?
3. Why doesn't the loop condition use `left <= right`?

##### Solution:
1. The key invariant is that the left and right pointers are at opposite ends of the given array: left: [0...n/2] & right: [n-1 ... n/2] 
> **Left and right pointers**: A more precise invariant would be:
> 	"The elements at positions `arr[0..left-1]` and `arr[right+1..n-1]` are already in their final reversed positions, while the subarray `arr[left..right]` remains to be processed."
> This captures what changes and what stays the same throughout the loop.
2. answer included in 1.
3. We'd swap an element with itself (which does nothing)


### Challenge 2: Dutch National Flag Sort

Sort an array of 0s, 1s, and 2s in a single pass:
```
function dutchFlagSort(arr) {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;
    
    while (mid <= high) {
        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else { // arr[mid] === 2
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }
}
```

**Questions:**
1. What are the invariants for the three pointers (`low`, `mid`, `high`)?
2. How does each branch of the if-else maintain these invariants?
3. Why does the loop condition use `mid <= high` instead of something else?

##### Solutions:
1. The invariants are:
	- `arr[0..low-1]` contains only 0s
	- `arr[low..mid-1]` contains only 1s
	- `arr[high+1..n-1]` contains only 2s
	- `arr[mid..high]` is unprocessed/unsorted

2. low is only incremented when mid is incremented. high is decremented individually and is the expression checked on each loop pass. If we used `mid < high`, we'd leave one element unprocessed.
3. Any other check would allow high to pass below mid, meaning elements would be processed more than once, breaking the 'single pass' efficiency of the algorithm

##### Confused about these invariants?

###### The "Vacuous Truth" Principle

`arr[0..low-1]` is an empty range when `low = 0`. But in logic and computer science:

**An empty range satisfies any "all" condition!**

Think about it: "All the dragons in my garage can breathe fire," even though there are no dragons in the garage, the statement is **vacuously true**. There's no dragon to disprove it!

###### Formalizing This

The invariant can be stated more precisely:

> **For all indices i where 0 ≤ i < low, arr[i] = 0**

When `low = 0`, the condition "0 ≤ i < 0" is impossible to satisfy (no such i exists), so the statement is true by default.

**"Wouldn't be true on our first pass"** - Actually, it **is** true! The array hasn't been sorted yet, but the invariant is about the _partitioning_, not the entire array.


### Challenge 3: Linked List Cycle Detection (Floyd's Algorithm)

This one's a classic with a subtle invariant:
```
function hasCycle(head) {
    if (!head) return false;
    
    let slow = head;
    let fast = head.next;
    
    while (fast !== null && fast.next !== null) {
        if (slow === fast) {
            return true;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return false;
}
```

**Questions:**
1. What is the invariant relationship between `slow` and `fast` pointers?
2. Why do we initialize `fast` to `head.next` instead of `head`?
3. How does the loop condition guarantee we won't get a null pointer error?

##### Solution:
1. the fast pointer moves twice as fast as slow. **If there's a cycle, fast will lap slow exactly when fast has gone around the cycle once more than slow**
2. The reason for `head.next` is to avoid **immediate false positive** when `slow === fast` at start.
3. by ensuring fast is not initialized to null, and fast can continue to look one node ahead of slow


### Challenge 4: Moving Zeroes to End (In-Place)

```
function moveZeroes(nums) {
    let nonZeroPtr = 0;
    
    // First pass: move all non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroPtr] = nums[i];
            nonZeroPtr++;
        }
    }
    
    // Second pass: fill the rest with zeroes
    for (let i = nonZeroPtr; i < nums.length; i++) {
        nums[i] = 0;
    }
}
```

**Questions:**

1. What is the invariant during the first loop (lines 5-10)?
2. What does `nonZeroPtr` represent at any point in the first loop?
3. After the first loop completes, what invariant is established about the array?

##### Solution:
1. The first `nonZeroPtr` elements of `nums` are the non-zero elements from `nums[0..i-1]`, in their original order.
2. it represents where to place the next nonzero number
3. The first `nonZeroPtr` elements are all the non-zero elements from the original array, in order.


### Challenge 5: Rotate Array K Positions

```
function rotateArray(nums, k) {
    k = k % nums.length;
    if (k === 0) return;
    
    // Reverse entire array
    reverse(nums, 0, nums.length - 1);
    // Reverse first k elements
    reverse(nums, 0, k - 1);
    // Reverse remaining elements
    reverse(nums, k, nums.length - 1);
}

function reverse(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}
```

**Example:** `rotateArray([1,2,3,4,5,6,7], 3)` → `[5,6,7,1,2,3,4]`

**Questions:**
1. After each of the three reversals, what is true about the array?
2. What invariant connects the three reversal operations?
3. Why does `k = k % nums.length` matter?

##### Solution:
1. After first reversal: `nums[0..n-1]` is the reverse of original
   After second reversal: `nums[0..k-1]` are in correct final positions, `nums[k..n-1]` still reversed from original first n-k elements
   After third reversal: Entire array is correctly rotated
2. The rotation transformation can be decomposed into three reversals that progressively move elements to their final positions while maintaining relative order within each segment.
3. Without `%`, a `k` larger than `n` would cause:
	- Index errors in the reversals
	- Unnecessary work
	- Potentially incorrect results
