/**
 * n-degrees-of-separation.spec.js
 *
 * Test harness for n-degrees of separation
 */
/* Dependencies  */
import { assert } from 'chai';
import getNDegreesOfSeparation from '../../../problems/js/algorithms/n-degrees-of-separation.js';
import Person from '../../../data-structures/Person.js';

// Create people
const Joe = new Person('Joe', []);
const Sue = new Person('Sue', []);
const Mary = new Person('Mary', []);
const Gene = new Person('Gene', []);
const Fred = new Person('Fred', []);
const Feldman = new Person('Feldman', []);
// eslint-disable-next-line no-unused-vars
const Artemis = new Person('Artemis', []);

// Create network
Joe.setFriends([Sue, Mary, Gene]);
Sue.setFriends([Joe]);
Mary.setFriends([Joe, Feldman]);
Gene.setFriends([Joe, Fred]);
Fred.setFriends([Gene, Feldman]);
Feldman.setFriends([Mary, Fred]);

describe('Algorithms: N Degrees of Separation', function () {
    it('should find that Joe is 2 degrees of separation away from Feldman', function () {
        assert.equal(getNDegreesOfSeparation(Joe, 'Feldman'), 2);
    });

    it('should find that Fred is 1 degree of separation away from Gene', function () {
        assert.equal(getNDegreesOfSeparation(Fred, 'Gene'), 1);
    });

    it('should find that Joe is not connected to Artemis in the social network', function () {
        assert.equal(getNDegreesOfSeparation(Joe, 'Artemis'), -1);
    });
});

