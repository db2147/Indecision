// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
    name: 'SuperDave',
    cities: ['Milwaukee', 'Boston', 'Houston'],
    printPlacesLived() {   
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived()); // calling our function; it console logs all of our places

const person = { // created a new object named person
    hobby: 'Crochet',
    towns: ['Boise', 'Boston', 'Houston'],
    printTownsLived() { // create method 
        // use .map to go through the items in the array
        return this.towns.map((town) => 'I like to ' + this.hobby + ' in ' + this.towns);
    }
};
console.log(person.printTownsLived());

// Challenge area

const multiplier = {
    // numbers - array of numbers
    numbers: [10, 20, 30],
    // multiplyBy -single number
    multiplyBy: 3,
    //multiply - return a new array where the numbers have been multiplied
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};
console.log(multiplier.multiply());

const pie = {
    flavors: ['apple', 'cherry', 'pecan'],
    toppingAdd: ' whip cream',
    tasty() {
        return this.flavors.map((flavor) => flavor + ' with' + this.toppingAdd + ' please');
    }
};
console.log(pie.tasty());