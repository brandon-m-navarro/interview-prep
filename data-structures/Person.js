export default class Person {
    constructor(id, friends) {
        this.id = id;
        this.friends = friends;
    }

    getId() {
        return this.id;
    }

    getFriends() {
        return this.friends;
    }

    setFriends(friends) {
        this.friends = friends;
    }
}
