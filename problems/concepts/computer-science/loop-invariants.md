Not sure about the definition for a loop invariant? Check out [these notes](../../../notes/loop-invariants.md).

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

