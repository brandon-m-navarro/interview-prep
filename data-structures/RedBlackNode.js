/**
 * 
**/
export default class RBNode {
    constructor({data, left, right, color, count}) {
        this.data = data;
        this.count = count || 1; // Multiplicity count (allows for duplicate values)
        this.left = left || null;
        this.right = right || null;
        this.color = color || Color.BLACK;
    }

    setChildren({left, right}) {
        this.left = left;
        this.right = right;
    }
}

// Create enum
export const Color = {
  RED: Symbol('red'),
  BLACK: Symbol('black')
};
