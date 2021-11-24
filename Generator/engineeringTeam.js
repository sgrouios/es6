const engineeringTeam = {
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave'
};

function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
}

const names = [];
for(let name of TeamIterator(engineeringTeam)){
    names.push(name);
}

console.log(names);