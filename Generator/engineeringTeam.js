const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.tester;
    }
    // Tells object how to behave when used in a for-of loop
}

const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam;
    }
};
//yield* delegates to another generator

const names = [];
for(let name of engineeringTeam){
    names.push(name);
}

console.log(names);