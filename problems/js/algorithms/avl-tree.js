/**
 * Complete the methods in the AVLTree class marked TODO.
 * 
 * An AVL tree is a BST with an additional balancing invariant:
 *  - For any node in the tree, the heights of its left and right subtrees may
 *    differ by at most one.
 * 
 * Implementing a full AVLTree is likely out of scope for an interview
 * question, but doing so is the best way to fully understand the BST & AVL
 * data structure.
 * 
 * To complete this implementation, you will have to implement helper methods.
 * Some of the helper methods I used in my solution: isBalanced(node),
 * getBalanceFactor(node), rotateLeft(node), rotateRight(node), &
 * updateHeight(node).
 * 
 * This is not a quick implementation, especially if you're not familiar with
 * working with BSTs. Don't feel discouraged if you need to peek at the
 * solution. My solution takes an iterative approach, so if you'd like an
 * easier variation on this problem, try to implement a recursive solution
 * using mine as a guide.
 */

export default class AVLTree {
    constructor(initialArray) {
        this.root = buildTree(initialArray);
    }

    // TODO: Given an array, build an AVLTree
    buildTree (arr) {

    }

    // TODO: Add a node to the AVL Tree with the specified nodeVal. If matching
    // node.data already exists, increment the count of the node.
    addNode (nodeVal) {

    }

    // TODO: Decrement the count of the a Node with the matching nodeVal. If
    // count on Node reaches 0, remove from the tree.
    deleteNode (nodeVal) {

    }
}
