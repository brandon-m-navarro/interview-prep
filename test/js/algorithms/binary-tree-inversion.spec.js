/**
 * binary-tree-inversion.spec.js
 *
 * Test harness for binary tree inversion
 */
/* Dependencies */
import { assert, expect } from 'chai';
import invertTree from '../../../problems/js/algorithms/binary-tree-inversion.js';
import TreeNode from '../../../data-structures/TreeNode.js';

/* Test Cases */
describe('Algorithms: Binary Tree Inversion', function () {
    it('should return the root in a single node tree', function () {
        const root = new TreeNode(4);
        assert.equal(invertTree(root), root);
    });

    it('should invert a normal tree', function () {
        // Create nodes
        const root = new TreeNode(4),
              i2 = new TreeNode(2),
              i7 = new TreeNode(7),
              i1 = new TreeNode(1),
              i3 = new TreeNode(3),
              i6 = new TreeNode(6),
              i9 = new TreeNode(9);

        // Assemble tree  
        root.left = i2;          //              4
        root.right = i7;         //           /     \
        i2.left = i1;            //          /       \
        i2.right = i3;           //         2         7
        i7.left = i6;            //       /   \     /   \
        i7.right = i9;           //      1     3   6     9

        // Build the expected result
        const erRoot = new TreeNode(4),
              er2 = new TreeNode(2),
              er7 = new TreeNode(7),
              er1 = new TreeNode(1),
              er3 = new TreeNode(3),
              er6 = new TreeNode(6),
              er9 = new TreeNode(9);

        // Assemble inverted tree  
        erRoot.left = er7;          //              4
        erRoot.right = er2;         //           /     \
        er7.left = er9;             //          /       \
        er7.right = er6;            //         7         2
        er2.left = er3;             //       /   \     /   \
        er2.right = er1;            //      9     6   3     1

        // Run the code and compare
        expect(invertTree(root)).to.deep.equal(erRoot);
    });
});
