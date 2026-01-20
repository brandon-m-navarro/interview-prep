## Worst-Case Analysis
Here are some old notes from my Algorithms course at WPI. These may be useful if you're unfamiliar with 'Big O' analysis, which is mentioned in a few problems/solutions.

### Definition
- **Worst case running time**: Bound on largest possible running time of algorithm on input of given size N
- Generally captures efficiency in practice

## Measuring the Growth of Work
How does the algorithm's complexity grow as the input size increases?

```
Input Size (n)  O(1)  O(log n)  O(n)  O(n log n)  O(n²)  O(2ⁿ)
10              1     1         10    10          100    1024
100             1     2         100   200         10k    1.3e+30
1000            1     3         1000  3000        1M     enormous
```

## Big-O Notation

### Formal Definition
For a given function g(n), O(g(n)) is defined as:
O(g(n)) = {f(n): there exists positive constants c and n₀ such that 0 ≤ f(n) ≤ cg(n) for all n ≥ n₀}

### Purpose
- Evaluate algorithms and place them into complexity families
- Used when we only know the asymptotic upper bound

### Simplification Rules
```
# Simplification Rules:
# 1. Drop constants
3n² + 2 = O(n²)        # Not O(3n²)
5n + 10 = O(n)         # Not O(5n)

# 2. Keep only dominant terms
n³ + n² + n + 1 = O(n³)  # n³ dominates for large n
2ⁿ + n¹⁰ = O(2ⁿ)         # Exponential dominates polynomial

# 3. Ignore lower-order terms
O(n² + n) = O(n²)
O(n + log n) = O(n)
```

### Common Misconceptions
```
# O(1) - "Constant Time"
# Does NOT mean only one operation
# DOES mean work doesn't change with input size
def get_first_element(arr):
    return arr[0]  # O(1) - same work regardless of array size

# O(n) - "Linear Time"  
# Does NOT mean exactly N operations
# DOES mean work grows proportionally to N
def sum_array(arr):
    total = 0
    for num in arr:    # Work scales with array size
        total += num   # O(n) - linear growth
    return total
```

## Analyzing Complex/Combined Algorithms

Algorithms typically consist of sequences of logical steps. We analyze sections and combine them.

### Sequential Steps
If steps appear one after another, **add** their O() notations

```
def sequential_operations(arr):
    # Step 1: O(n)
    for i in range(len(arr)):
        print(arr[i])
    
    # Step 2: O(n²)  
    for i in range(len(arr)):
        for j in range(len(arr)):
            print(arr[i], arr[j])
    
    # Total: O(n) + O(n²) = O(n²)  (keep dominant term)
```

### Embedded Steps  
If steps appear nested (one inside another), **multiply** their O() notations

```
def nested_operations(arr):
    # Outer loop: O(n)
    for i in range(len(arr)):
        # Inner loop: O(n) - runs for each i
        for j in range(len(arr)):
            print(arr[i], arr[j])
    
    # Total: O(n) × O(n) = O(n²)
```

## Practical Examples

### Example 1: Insert in Sorted Linked List
```
def insert_sorted_linked_list(head, new_value):
    # Step 1: Find correct position - O(n)
    current = head
    prev = None
    while current and current.value < new_value:
        prev = current
        current = current.next  # Potentially traverse all n nodes
    
    # Step 2: Create and insert node - O(1)
    new_node = Node(new_value)
    new_node.next = current
    if prev:
        prev.next = new_node
    
    # Combined: O(n) + O(1) = O(n)
```

### Example 2: Search 2D Array
```
def search_2d_array(matrix, target):
    rows = len(matrix)
    cols = len(matrix[0])
    
    # Outer loop: O(rows)
    for i in range(rows):
        # Inner loop: O(cols) - runs for each row
        for j in range(cols):
            if matrix[i][j] == target:
                return (i, j)
    
    # Combined: O(rows) × O(cols) = O(rows × cols)
    # If rows = n, cols = m: O(n × m)
    # If square matrix (n × n): O(n²)
```

## Big-O vs Θ vs Ω

### Big-O (Upper Bound)
- Asymptotic upper bound complexity
- Can be loose or tight bound

### Θ (Tight Bound) 
- Asymptotic same bound complexity
- Only tight bound
- f(n) = Θ(g(n)) means same complexity

### Ω (Lower Bound)
- Asymptotic lower bound complexity
- f(n) = Ω(g(n)) means g(n) is a lower bound for f(n)
- f(n) cannot get better than g(n)
- Used to prove minimum complexity requirements

```
# Example: Linear Search
# Best case: O(1) - first element
# Worst case: O(n) - last element or not found
# Average case: O(n) - middle element
# Θ(n) - tight bound (cannot do better than n in worst case)

def linear_search(arr, target):
    for i in range(len(arr)):  # Θ(n) - must check all elements in worst case
        if arr[i] == target:
            return i
    return -1

# Ω(1) - lower bound (can find in constant time if lucky)
# O(n) - upper bound (never worse than linear)
# Θ(n) - tight bound (linear in worst case)
```

## Common Complexity Classes
```
Complexity    Name          Example
O(1)         Constant      Array access, arithmetic
O(log n)     Logarithmic   Binary search
O(n)         Linear        Linear search, iteration
O(n log n)   Linearithmic  Efficient sorting (merge sort, quick sort)
O(n²)        Quadratic     Bubble sort, nested loops
O(n³)        Cubic         Triple nested loops
O(2ⁿ)        Exponential   Subset generation, brute force
O(n!)        Factorial     Permutation generation
```