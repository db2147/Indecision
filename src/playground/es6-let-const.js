var nameVar = 'Andrew';
nameVar  = 'Mike';
console.log('nameVar', nameVar);

var someVar = 'Superdave';
someVar = 'Damon';
console.log('someVar', someVar);

var cornVar = 'Mrsm';
cornVar = 'Is this corn hand shucked?';
console.log('cornVar', cornVar);

// let is similar to var-we can redeclare it over and over
let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

let siblingLet = 'Peter';
siblingLet = 'Katelyn';
console.log('siblingLet', siblingLet);

let brotherLet = 'Damon';
brotherLet = 'Peter';
console.log('brotherLet', brotherLet);

// here is a const example:
const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping

var fullName = 'Jen Mead';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);