const user = {
    name: 'Stephen',
    address: {
        country: 'Australia',
        state: 'Melbourne'
    }
}

// changing address object will change original object because spread copied reference and not value
const copyUser = { ...user };
copyUser.address.country = 'United States';

console.log('Changing address in copy object changes original object')
console.dir(`Original user: ${JSON.stringify(user)}`);
console.dir(`Copied user: ${JSON.stringify(copyUser)}`);
console.log();

// Without specifically telling spread operator to shallow copy nested object, it will
// copy the object with the nested object referenced
user.address.country = 'Australia';
const copyUserShallow = { ...user, address: { ...user.address } }; //create new/overwirte field called address and copy nested object values
copyUserShallow.address.country = 'United States';

console.log('Changing address in properly copied object does not alter original object')
console.dir(`Original user: ${JSON.stringify(user)}`);
console.dir(`Copied shallow user: ${JSON.stringify(copyUserShallow)}`);

