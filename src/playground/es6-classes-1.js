// Lecture 24 & 25

 
class Person {  
     constructor(name = 'Anonymous', age = 0) {  
       this.name = name;
       this.age = age;
     }
     getGreeting() {
    return `Hi. I am ${this.name}.`;
  }
    getDescription() {
      return `${this.name} is ${this.age} years old.`;
    }
}

// we are going to set up a new class called Student
class Student extends Person {
  // we want to 'override' the above constructor function
  constructor(name, age, major) {   
    super(name, age); // pulling in the defaults from above using the super keyword
    this.major = major;
  }
  hasMajor() {  
    return !!this.major;  // we are going to 'flip' this twice using the logical not operator
  }
  // we are going to change the behaviour of the method which we've defined above
  getDescription() {
    let description = super.getDescription();
    // check if the student has a major
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}

// Challenge: create a new subclass of Person called Traveler, which will extend the Person class.
// Add a method called homeLocation which can be used throughout the class
// Override getGreeting method
// 1. Hi. I am David Bierma.  I'm visiting from Philadelphia.
// 2. Hi. I am David Bierma
class Traveler extends Person {
  constructor(name, age, homeLocation){ // the root-where we first define homeLocation
  super(name, age); // pulling in name and age from getGreeting above
  this.homeLocation = homeLocation; //define homeLocation as being equal to homeLocation
  }
  getGreeting() { // redefining getGreeting by superimposing
    let greeting = super.getGreeting(); // letting greeting be equal to the above greeting string we defined in 'getGreeting'

    if(this.homeLocation) { // if this.homeLocation is called, we give this greeting:
      greeting += ` I am visiting from ${this.homeLocation}.`
    }
    return greeting;
  }
}


const me = new Traveler('David Bierma', 40, 'Houston');
console.log(me.getGreeting()); 

const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGreeting());