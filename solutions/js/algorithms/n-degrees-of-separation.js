/**
 * N-Degrees of Separation
 * 
 * Given a starting Person and the name of a target (string), determine the
 * number of degrees of separation between the two. If the two people are not
 * connected, return -1.
 * 
 * For example, if Joe has 3 friends (Person.friends), all three of those
 * friends are 1 degree of separation away.
 * 
 * If Audrey has one friend (Audrey.getFriends() -> [Tom]), and Tom has 2
 * friends (Tom.getFriends() -> [Audrey, Saria]), Audrey is 2 degrees of
 * separation away from Saria.
 * 
 * People who are friends always have each other as friends (wholesome).
 * For example, using the last example, Audrey appears in Tom's friend
 * array and Tom appears in Aubrey's friend array.
 */
/* Dependencies  */
import Person from "../../../data-structures/Person.js";
import Queue from "../../../data-structures/Queue.js"

export default function getNDegreesOfSeparation(startingPerson, targetId) {

    if (startingPerson.id === targetId) return 0;

    // Breadth-first should find our match faster. We need to keep track of
    // how many layers we examine.
    const queue = new Queue([{person: startingPerson, layer: 0}]),
          visited = new Set(startingPerson.id);

    while (!queue.isEmpty()) {
        const { person, layer } = queue.dequeue();

        // Check if we found our target
        if (person.id === targetId) {
            return layer;
        }

        // Examine friends
        const friends = person.getFriends();
        for (let i=0; i<friends.length; i++) {
            let friend = friends[i];
            if (!visited.has(friend.id)) {
                visited.add(person.id);
                queue.enqueue({person: friend, layer: layer+1});
            }
        }
    }

    return -1;
}
