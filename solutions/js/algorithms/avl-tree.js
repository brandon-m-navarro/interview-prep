/**
 * Complete the methods in the AVLTree class marked TODO.
 * 
 * An AVL tree is a BST with an additional balancing invariant:
 *  - For any node in the tree, the heights of its left and right subtrees may
 *    differ by at most one.
 * 
 * NOTES:
 *  Implementing a full AVLTree is likely out of scope for an interview
 *  question.
 * 
 *  I implemented an iterative solution here, but using recursion for adding
 *  a node may be easier for you to understand. I essentially simulate the
 *  recursive solution using a Stack data structure.
 */

import AVLNode from "../../../data-structures/AVLNode.js";

export default class AVLTree {
    constructor(initialArray) {
        this.root = null;
        this.buildTree(initialArray); // Will handle setting this.root
    }

    // Given an array, build an AVLTree
    buildTree (arr) {
        for (let i=0; i<arr.length; i++) {
            this.add(arr[i]);
        }
    }

    // Add a node to the AVL Tree
    add (nodeVal) {
        // Set root if no nodes exist
        if (this.root === null) {
            this.root = new AVLNode({data: nodeVal, height: 0, depth: 0});
            return;
        }

        // Starting at this.root, find appropriate place for node
        if (this.root.data === nodeVal) {
            this.root.count += 1;
        } else {
            let { node, nodesVisited, isFound } = this.get(nodeVal);

            // If nodeVal already existed in tree, no other action needed
            if (!isFound) {
                let lastNode = nodesVisited[0];

                // Following BST principles, determine where to place new node
                if (lastNode.data > nodeVal) {
                    lastNode.left = new AVLNode({data: nodeVal, height: 0});
                } else {
                    lastNode.right = new AVLNode({data: nodeVal, height: 0});
                }

                // Balance the tree
                this.balanceTree(nodesVisited);
            } else {
                node.count += 1;
            }
        }
    }

    // Delete the Node with the specified value. Typically, this will reduce
    // the count of a node by 1. If the count reaches 0, the node is removed
    // from the tree.
    delete (nodeVal, fullDelete=false) {
        let { isFound, node, nodesVisited } = this.get(nodeVal);

        // Node doesn't exist
        if (!isFound) {
            return false;
        }

        // Handle count logic
        if (node.count > 1 && !fullDelete) {
            node.count--;
            return true;
        }

        // Remove the node entirely
        let parent = null;
        if (nodesVisited.length > 1) {
            parent = nodesVisited[1];
        }

        // Case 1: No children (leaf)
        if (!node.left && !node.right) {
            if (!parent) {
                this.root = null;
            } else if (parent.left === node) {
                parent.left = null;
            } else {
                parent.right = null;
            }

            // Remove the deleted node
            nodesVisited.shift();
        }

        // Case 2: One child
        else if (!node.left || !node.right) {
            let child = node.left || node.right;

            if (!parent) {
                this.root = child;
            } else if (parent.left === node) {
                parent.left = child;
            } else {
                parent.right = child;
            }
        }

        // Case 3: Two children - find inorder successor
        else {
            // Find the smallest node in right subtree (successor)
            let successor = node.right,
                successorParent = node,
                successorPath = [node];

            while (successor.left) {
                successorParent = successor;
                successorPath.unshift(successor);
                successor = successor.left;
            }

            // Replace node's data with successor's data
            node.data = successor.data;
            node.count = successor.count;

            // Remove the successor (which has at most one child)
            if (successorParent === node) {
                successorParent.right = successor.right;
            } else {
                successorParent.left = successor.right;
            }

            // Add successor's parent to nodesVisited for balancing
            nodesVisited.unshift(successorParent);
        }

        // Rebalance the tree
        this.balanceTree(nodesVisited);
        return true;
    }

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

    // Given a path of nodes that were visited en route to an added/deleted
    // node (from the bottom-up), recalculate the heights and perform rotations
    // to balance the tree.
    balanceTree (nodesVisited) {
        nodesVisited.forEach((node, index) => {

            // Update height
            let lHeight = node.left !== null ? node.left.height : -1,
                rHeight = node.right !== null ? node.right.height : -1;
            node.height = Math.max(lHeight, rHeight) + 1;

            // Check if adding node unbalanced the tree
            if (!this.isBalanced(node)) {
                let newRoot;
                switch(this.findRotation(node)) {
                    case 'LL':
                        newRoot = this.rotateRight(node);
                        break;
                    case 'RR':
                        newRoot = this.rotateLeft(node);
                        break;
                    case 'LR':
                        // First rotate left on node's left child
                        node.left = this.rotateLeft(node.left);
                        // Then rotate right on node
                        newRoot = this.rotateRight(node);
                        break;
                    case 'RL':
                        // First rotate right on node's RIGHT child
                        node.right = this.rotateRight(node.right);
                        // Then rotate left on node
                        newRoot = this.rotateLeft(node);
                        break;
                    default:
                        throw new Error(
                            'Unrecognized rotation needed. Not ' +
                            'possible unless AVL properties violated.'
                        );
                }

                // Update parent
                if (index < nodesVisited.length - 1) {
                    let parent = nodesVisited[index + 1];
                    if (parent.left === node) {
                        parent.left = newRoot;
                    } else {
                        parent.right = newRoot;
                    }
                } else { // This was the root
                    this.root = newRoot;
                }
            }
        });
    }

    // Rotate the given node to the left
    rotateLeft (node) {
        let pivotNode = node.right;

        // Rotate
        node.right = pivotNode.left;
        pivotNode.left = node;

        // Update heights for affected nodes
        this.updateHeight(node);
        this.updateHeight(pivotNode);

        return pivotNode;
    }

    // Rotate the given node to the right
    rotateRight (node) {
        let pivotNode = node.left;

        // Rotate
        node.left = pivotNode.right;
        pivotNode.right = node;

        // Update heights for affected nodes
        this.updateHeight(node);
        this.updateHeight(pivotNode);

        return pivotNode;
    }

    // Given an unbalanced node, determine the needed rotation (LL, RR, LR, RL)
    findRotation (node) {
        const bf = this.getBalanceFactor(node);

        if (bf > 1) { // Left heavy
            return this.getBalanceFactor(node.left) >= 0 ? 'LL' : 'LR';
        } else { // Right heavy
            return this.getBalanceFactor(node.right) <= 0 ? 'RR' : 'RL';
        }
    }

    // Given a node, update it's height based on the max height of its children
    updateHeight(node) {
        const leftHeight = node.left ? node.left.height : -1,
              rightHeight = node.right ? node.right.height : -1;
        node.height = Math.max(leftHeight, rightHeight) + 1;
    }

    // Determine the balance factor (which side is heavier- <1: right >1: left)
    getBalanceFactor(node) {
        const leftHeight = node.left ? node.left.height : -1,
              rightHeight = node.right ? node.right.height : -1;
        return leftHeight - rightHeight;
    }

    // Check if the tree is balanced from the given node
    isBalanced (node) {

        // Base case
        if (node === null) {
            return true;
        }

        // Check that children are balanced (height <= 1)
        const isBalanced = Math.abs(this.getBalanceFactor(node)) <= 1;

        return isBalanced && 
            this.isBalanced(node.left) && 
            this.isBalanced(node.right);
    }
}
