const user = {
    name: 'Stephen',
    address: {
        country: 'Australia',
        state: 'Melbourne'
    }
}

// Shallow clone (copied memory reference of nested object)
const copyUser = { ...user };
copyUser.address.country = 'United States';

console.log('Changing address in shallow copy object changes original object')
console.dir(`Original user: ${JSON.stringify(user)}`);
console.dir(`Shallow copied user: ${JSON.stringify(copyUser)}`);
console.log();

// Deep clone
user.address.country = 'Australia';
const copyUserShallow = { ...user, address: { ...user.address } }; //create new/overwirte field called address and copy nested object values
copyUserShallow.address.country = 'United States';

console.log('Changing address deep-cloned object does not alter original object')
console.dir(`Original user: ${JSON.stringify(user)}`);
console.dir(`Deep-cloned user: ${JSON.stringify(copyUserShallow)}`);

