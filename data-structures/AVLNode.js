/**
 * The height of a node is defined as the length of the longest path from that
 * node to a leaf. In the AVL tree, the heights of the two child subtrees of
 * any node differ by at most one.
**/
export default class AVLNode {
    constructor({data, left, right, height, count}) {
        this.data = data;
        this.count = count || 1; // Multiplicity count (allows for duplicate values)
        this.left = left || null;
        this.right = right || null;
        this.height = (height !== undefined) ? height : -1;
    }

    setChildren({left, right}) {
        this.left = left;
        this.right = right;
    }
}
