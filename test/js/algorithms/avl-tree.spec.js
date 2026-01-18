/**
 * avl-tree.spec.js
 *
 * Test harness for AVL Tree
 */
/* Dependencies */
import { expect } from 'chai';
import AVLTree from '../../../solutions/js/algorithms/avl-tree.js';
import AVLNode from '../../../data-structures/AVLNode.js';

/* Test Cases */
describe('Algorithms: AVL Tree', function () {

    it('should be able to build an AVL tree from array that needs no rotations', function () {
        const input = [4, 2, 6, 1, 3, 7, 5],
              root4 = new AVLNode({data: 4, height: 2, depth: 0}),
              node1 = new AVLNode({data: 1, height: 0, depth: 2}),
              node2 = new AVLNode({data: 2, height: 1, depth: 1}),
              node3 = new AVLNode({data: 3, height: 0, depth: 2}),
              node5 = new AVLNode({data: 5, height: 0, depth: 2}),
              node6 = new AVLNode({data: 6, height: 1, depth: 1}),
              node7 = new AVLNode({data: 7, height: 0, depth: 2});

        // Assemble tree
        root4.setChildren({left: node2, right: node6});
        node2.setChildren({left: node1, right: node3});
        node6.setChildren({left: node5, right: node7});

        // Check equality
        expect(new AVLTree(input).root).to.deep.equal(root4);
    });

    it('should be able to build an AVL tree that requires rotations', function () {

        const input = [1, 2, 3, 4, 5, 6, 7],
              root4 = new AVLNode({data: 4, height: 2}),
              node1 = new AVLNode({data: 1, height: 0}),
              node2 = new AVLNode({data: 2, height: 1}),
              node3 = new AVLNode({data: 3, height: 0}),
              node5 = new AVLNode({data: 5, height: 0}),
              node6 = new AVLNode({data: 6, height: 1}),
              node7 = new AVLNode({data: 7, height: 0});

        // Assemble tree
        root4.setChildren({left: node2, right: node6});
        node2.setChildren({left: node1, right: node3});
        node6.setChildren({left: node5, right: node7});

        // Check equality
        expect(new AVLTree(input).root).to.deep.equal(root4);
    });

    it('should be able to add two Nodes and rebalance with a left rotation', function () {
        const tree = new AVLTree([10]),
              root5 = new AVLNode({data: 5, height: 1}),
              node10 = new AVLNode({data: 10, height: 0}),
              node2 = new AVLNode({data: 2, height: 0});

        // Assemble answer tree
        root5.setChildren({left: node2, right: node10})

        // Add two nodes that should cause a single left rotation
        tree.add(5);
        tree.add(2);

        // Check equality
        expect(tree.root).to.deep.equal(root5);
    });

    it('should be able to add two Nodes and rebalance with a right rotation', function () {
        const tree = new AVLTree([10]),
              root15 = new AVLNode({data: 15, height: 1}),
              node10 = new AVLNode({data: 10, height: 0}),
              node20 = new AVLNode({data: 20, height: 0});

        // Assemble answer tree
        root15.setChildren({left: node10, right: node20});

        // Add two nodes that should cause a single rotation
        tree.add(15);
        tree.add(20);

        // Check equality
        expect(tree.root).to.deep.equal(root15);
    });


    it('should be able to complete a rotation not involving root', function () {
        const tree = new AVLTree([30]),
              root30 = new AVLNode({data: 30, height: 2}),
              node10 = new AVLNode({data: 10, height: 1}),
              node40 = new AVLNode({data: 40, height: 0}),
              node5 = new AVLNode({data: 5, height: 0}),
              node20 = new AVLNode({data: 20, height: 0});

        // Assemble answer tree
        root30.setChildren({left: node10, right: node40});
        node10.setChildren({left: node5, right: node20});

        // Add nodes to tree
        tree.add(20);
        tree.add(40);
        tree.add(10);
        tree.add(5); 

        // Check equality
        expect(tree.root).to.deep.equal(root30);
    });

    it('should be able to complete a double rotation (LR)', function () {
        const tree = new AVLTree([10]),
              root6 = new AVLNode({data: 6, height: 1}),
              node5 = new AVLNode({data: 5, height: 0}),
              node10 = new AVLNode({data: 10, height: 0});

        // Assemble answer tree
        root6.setChildren({left: node5, right: node10});

        // Add nodes to tree
        tree.add(5);
        tree.add(6);

        // Check equality
        expect(tree.root).to.deep.equal(root6);
    });

    it('should be able to complete a double rotation (RL)', function () {
        const tree = new AVLTree([10]),
              root11 = new AVLNode({data: 11, height: 1}),
              node15 = new AVLNode({data: 15, height: 0}),
              node10 = new AVLNode({data: 10, height: 0});

        // Assemble answer tree
        root11.setChildren({left: node10, right: node15});

        // Add nodes to tree
        tree.add(15);
        tree.add(11);

        // Check equality
        expect(tree.root).to.deep.equal(root11);
    });

    it('should be able to add an existing node and have correct count', function () {
        const tree = new AVLTree([30]),
              root30 = new AVLNode({data: 30, height: 2}),
              node10 = new AVLNode({data: 10, height: 1}),
              node40 = new AVLNode({data: 40, height: 0}),
              node5 = new AVLNode({data: 5, height: 0}),
              node20 = new AVLNode({data: 20, height: 0, count: 2});

        // Assemble answer tree
        root30.setChildren({left: node10, right: node40});
        node10.setChildren({left: node5, right: node20});

        // Add nodes to tree
        tree.add(20);
        tree.add(40);
        tree.add(10);
        tree.add(5); 
        tree.add(20);

        // Check equality
        expect(tree.root).to.deep.equal(root30);
    });

    it('should be able to delete and remove a node', function () {
        const tree = new AVLTree([30, 20, 10]),
              root20 = new AVLNode({data: 20, height: 1}),
              node10 = new AVLNode({data: 10, height: 0});

        // Assemble answer tree
        root20.setChildren({left: node10, right: null});

        // Delete node
        tree.delete(30);

        // Check equality
        expect(tree.root).to.deep.equal(root20);
    });

    it('should be able to delete and and remove the root', function () {
        const tree = new AVLTree([30, 20, 10]),
              root30 = new AVLNode({data: 30, height: 1}),
              node10 = new AVLNode({data: 10, height: 0});

        // Assemble answer tree
        root30.setChildren({left: node10, right: null});

        // Delete node
        tree.delete(20);

        // Check equality
        expect(tree.root).to.deep.equal(root30);
    });

    it('should be able to delete and and decrement the count of a node that exists in the tree', function () {

        const tree = new AVLTree([30, 20, 20, 40, 10, 5, 20]),
              root30 = new AVLNode({data: 30, height: 2}),
              node10 = new AVLNode({data: 10, height: 1}),
              node40 = new AVLNode({data: 40, height: 0}),
              node5 = new AVLNode({data: 5, height: 0}),
              node20 = new AVLNode({data: 20, height: 0, count: 2});

        // Assemble answer tree
        root30.setChildren({left: node10, right: node40});
        node10.setChildren({left: node5, right: node20});

        // Add nodes to tree
        tree.delete(20);

        // Check equality
        expect(tree.root).to.deep.equal(root30);
    });
});