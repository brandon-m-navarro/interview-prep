/**
 * Binary Tree inversion
 * 
 * Given the root of a binary tree, invert the tree, and return its root.
 * 
 * Constraints:
 *
 *  The number of nodes in the tree is in the range [0, 100]
 *  -100 <= Node.val <= 100
 * 
 * The definition of a TreeNode can be found in @/test/js/data-structures
 */

export default function invertTree(root) {

    // Base case. Stop recursion when there are no children.
    if (root == null) {
        return;
    }

    // Swap left and right child
    const tempNode = root.left;
    root.left = root.right;
    root.right = tempNode;

    // Recurse through tree
    invertTree(root.left);
    invertTree(root.right);

    // Will travel up call stack to first invocation, so root will be the
    // specified root.
    return root;
}
