
// Challenge - Use arrow functions
// getFirstName('Mike Smith') -> "Mike"
 

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};

console.log(getFirstName('Mike Smith'));




const getLastName = (lastName) => {
    return lastName.split(' ')[1];
};

console.log(getLastName('Mike Smith'));

// const getMiddleName = (midName) => {
//     return midName.split(' ')[1];
// };

const getMiddleName = (midName) => midName.split(' ')[1];  // es6 arrow function short hand version

console.log(getMiddleName('John Jacob Jengelheimer'))

const getMoreNames = (moreNames) => moreNames.split(' ')[3];

console.log(getMoreNames('abi stole my dada'));