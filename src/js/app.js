class Team {
    constructor() {
        this.members = new Set();
    }

    add(Character) {
        this.members.add(Character)
    }

    addAll(...Character) {
        [...Character].forEach((e) => this.members.add(e))

    }

    toArray() {
        return [...this.members];

    }
    
}