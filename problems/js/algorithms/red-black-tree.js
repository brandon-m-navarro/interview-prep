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


    // TODO: Add the node to the tree. If a RBNode exists with the specified
    // nodeVal, just increment it's count.
    add (nodeVal) {
    
    }
}
