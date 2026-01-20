/**
 * Complete a left-leaning Red-Black tree implementation.
 * 
 * This implements a Left-Leaning Red-Black tree (LLRB) based on Robert Sedgewick's
 * algorithm. LLRB trees are a variant of 2-3 trees where:
 * - Red links bind together 3-nodes (two keys, three children)
 * - Black links bind together the 2-3 tree
 * - Red links always lean left
 *
 * Standard Red-Black tree properties (all must be satisfied):
 * 
 *  1 - Every node is either red or black.
 * 
 *  2 - All null nodes are considered black.
 * 
 *  3 - A red node does not have a red child (no two reds in a row).
 * 
 *  4 - Every path from a given node to any of its descendant null nodes
 *      goes through the same number of black nodes (black height).
 * 
 * Additional LLRB-specific properties:
 * 
 *  5 - Red links always lean left (no right-leaning red links).
 *      This means if a node has a red right child, it must also have a red left child.
 * 
 *  6 - In a 3-node representation (a black parent with two red children),
 *      the red links must both be left-leaning relative to their parent.
 *
 *  7 - (Corollary) If a node N has exactly one child, the child must be red.
 *      If the child were black, its leaves would sit at a different black depth
 *      than N's null node (which is considered black by rule 2), violating rule 4.
 *
 * Insertion algorithm (applied bottom-up after recursive insertion):
 * 
 *  1. Fix right-leaning reds: If a node has a red right child and black left child,
 *     rotate left to make it left-leaning.
 * 
 *  2. Fix two reds in a row: If a node has a red left child and that left child
 *     also has a red left child, rotate right to balance.
 * 
 *  3. Split 4-nodes: If a node has two red children, flip colors (make current
 *     node red, children black) to split the temporary 4-node.
 * 
 * Note: The root is always black. After insertion, we ensure the root remains black.
 * 
 * This implementation follows the "no right-leaning red" invariant strictly,
 * which guarantees that the tree remains balanced with height O(log n).
 */
import RBNode, { Color } from "../../../data-structures/RedBlackNode.js";

export default class RedBlackTree {
    constructor (array) {
        this.root = null;
        this.buildTree(array);
    }

    // Given an array, build the tree by creating and adding the RBNodes
    // in-order
    buildTree (arr) {
        for (let i=0; i<arr.length; i++) {
            this.add(arr[i]);
        }
    }

    // Add the node to the tree. If a RBNode exists with the specified nodeVal,
    // just increment it's count.
    add (nodeVal) {

        this.root = this.insert(this.root, nodeVal);

        // Ensure root is black
        this.root.color = Color.BLACK;
    }

    // TODO: Decrement the count of the node with the matching nodeVal in the
    // tree. If count reaches 0, remove the node from the tree. This seems
    // like it's going to be a bit more complicated than AVL deletion, i'll
    // come back to this. Will exclude from /problem until implemented.
    delete (nodeVal) {}

    // Look for the node with the specified data value. Return an obj:
    // node: AVLNode | -1, nodesVisited: [], isFound: boolean
    get (nodeVal) {
        let runner = this.root,
            nodesVisited = [],
            isFound = false;
        while (runner !== null) {
            // Treat array as a Stack; order of array is a bottom-up path
            nodesVisited.unshift(runner);
            if (runner.data === nodeVal) {
                isFound = true;
                break;
            } else if (runner.data < nodeVal) {
                runner = runner.right;
            } else {
                runner = runner.left;
            }
        }

        return { node: isFound ? nodesVisited[0] : -1, nodesVisited, isFound };
    }

    // Recursive insert method for adding Nodes to tree
    insert (currentNode, value) {

        // Base case: If node is null, create new RED node with the value.
        // this.root must be black, so cover adding root node to empty tree.
        if (this.root === null) {
            this.root = new RBNode({data: value, color: Color.BLACK});
            return this.root;
        } else if (currentNode === null) {
            return new RBNode({data: value, color: Color.RED});
        }

        if (currentNode.data > value) {
            currentNode.left = this.insert(currentNode.left, value);
        } else if (currentNode.data < value) {
            currentNode.right = this.insert(currentNode.right, value);
        } else { // value exists in tree, increment count, and return found node
            currentNode.count++;
            return currentNode;
        }

        // When we get down here, we are now travelling up the recursion stack
        // from the bottom-up

        // Fix any red-black violations
        currentNode = this.fixColorViolations(currentNode);

        // Return the (potentially new) root of this subtree
        return currentNode;
    }

    // Given a node, fix any violations to the 4 rules in the header-comment
    fixColorViolations (currentNode) {

        // Helper function to check if node is red
        const isRed = (node) => node !== null && node.color === Color.RED;

        // Pattern 1: Right child is red, left child is black
        if (isRed(currentNode.right) && !isRed(currentNode.left)) {
            currentNode = this.rotateLeft(currentNode);
        }

        // Pattern 2: Left child is red, and left-left is red
        if (isRed(currentNode.left) && isRed(currentNode.left.left)) {
            currentNode = this.rotateRight(currentNode);
        }

        // Pattern 3: Both children are red -> color flip
        if (isRed(currentNode.left) && isRed(currentNode.right)) {
            this.flipColors(currentNode);
        }

        return currentNode;
    }

    // Make the node red, its children black (LLRB)
    flipColors (node) {
        node.color = Color.RED;
        node.left.color = Color.BLACK;
        node.right.color = Color.BLACK;
    }

    // Rotate the given node to the left
    rotateLeft (node) {
        let pivotNode = node.right;

        // Rotate
        node.right = pivotNode.left;
        pivotNode.left = node;

        // Update colors
        pivotNode.color = node.color;   // Pivot gets original node's color
        node.color = Color.RED;         // Rotated node becomes red

        return pivotNode;
    }

    // Rotate the given node to the right
    rotateRight (node) {
        let pivotNode = node.left;

        // Rotate
        node.left = pivotNode.right;
        pivotNode.right = node;

        // Update colors
        pivotNode.color = node.color;   // Pivot gets original node's color  
        node.color = Color.RED;         // Rotated node becomes red

        return pivotNode;
    }
}