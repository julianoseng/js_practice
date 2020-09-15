/* 

multi
line
comments


Shift + Enter = insert semicolon and continue on same line
Alt + Enter = insert semicolon and continue to new line
Ctrl + Alt + Enter = insert semicolon and stay at same position


*/ 



// // Log to console 
// console.log('Hello World');
// console.log(123);
// console.log(true);
// var greeting = 'Hello';
// console.log(greeting);
// console.log([1,2,3,4]);
// console.log({a:1, b:2});
// console.table({a:1, b:2})

// console.error('This is some error');
// console.clear();
// console.warn('This is a warning');
// console.time('Hello');
//     console.log('Hello World');
//     console.log('Hello World');
//     console.log('Hello World');
//     console.log('Hello World');
//     console.log('Hello World');
//     console.log('Hello World');
//     console.log('Hello World');
// console.timeEnd('Hello');

// console.clear();


// // var, let, const

// // VAR

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name)
// // Init a variable
// var greeting;

// // LET
// let name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name)

// // CONST = constant (cant change or re-assigne)
// const name = 'John';
// console.log(name);
// // Have to assign a value. Can not init.

// // Object
// const person = {
//     name: 'John',
//     age: 30
// }
// // change name var of object object
// person.name = 'Sara';
// // change age
// person.age = 32;

// console.log(person);


// const numbers = [1,2,3,4,5];
// // add 6 to the array
// numbers.push(6);

// console.log(numbers);

// // Primitive Types

// // String
// const name = 'John Doe';
// // Tells us the data type
// console.log(typeof name);
// // Number
// const age = 45;
// console.log(typeof age);
// //Boolean
// const hasKids = true;
// console.log(typeof hasKids);
// //Null
// const car = null;
// console.log(typeof car);
// //Undefined
// let test;
// console.log(typeof test);
// //Symbol
// const sym = Symbol();
// console.log(typeof sym);

// // Reference Types - Objects

// //Array
// const hobbies = ['movies','music'];
// console.log(typeof hobbies);
// //Object Literal
// const address = {
//     city: 'Boston',
//     state: 'MA'
// }
// console.log(typeof address);
// //Date
// const today = new Date();
// console.log(today);
// console.log(typeof today);


// // Type conversion
// let val;

// // Number to string
// val = String(555);
// val = String(4+4)
// // Bool to string
// val = String(true);
// // Date to a string
// val = String(new Date());
// // Array to string
// val = String([1,2,3,4]);
// // toString()
// val = (5).toString();
// val = (true).toString();

// //String to number
// val = Number('5');
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('hello'); //Not a number
// val = Number([1,2,3,4]); // Not a number

// val = parseInt('100'); //Int will not give decimals
// val = parseFloat('100.3'); //Float will give decimals

// //Output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);   // Only works on strings
// console.log(val.toFixed());

// const val1 = String(5);
// const val2 = 6;
// const sum = val1 +val2;

// console.log(sum);
// console.log(typeof sum);

// const num1 = 100;
// const num2 = 50;
// let val;

// // Simple math with numbers
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// // Math Object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.8);
// val = Math.ceil(2.4); //rounds up
// val = Math.floor(2.8); //rounds down
// val = Math.sqrt(64);
// val = Math.abs(-3); //absolute number
// val = Math.pow(8, 2); // 8 to the 2nd power
// val = Math.min(2,6,9,22); //gives the smallest number
// val = Math.max(2,5,7,4,2); //gives the largest number
// val = Math.random(); //gives random decimal

// val = Math.floor(Math.random() * 20 + 1); //gives us a random whole number

// console.log(val);


// // Concatenation

// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 36;
// const str = 'Hello there my name is Brad.';
// const tags = 'Web design,web development,programming'

// let val;

// val = firstName + lastName;

// val = firstName + ' ' + lastName;

// // Appending
// val = 'Brad ';
// val += 'Traversy';
// val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// // Escaping
// val = 'That\'s awesome, I cant wait';
// // Length
// val = firstName.length;
// // Concat
// val = firstName.concat(' ', lastName);
// // Change Case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();


// //index of
// val = firstName[0];
// // indexOf()
// val = firstName.indexOf('l');
// val = firstName.lastIndexOf('l');
// // charAt()
// val = firstName.charAt('2');
// // Get last char
// val = firstName.charAt(firstName.length - 1);
// // substring()
// val = firstName.substring(0, 4);
// // slice()
// val = firstName.slice(0,4);
// val = firstName.slice(-3);
// // split()
// val = str.split(' ');
// val = tags.split(',');
// // replace()
// val = str.replace('Brad', 'Jack');
// // includes()
// val = str.includes('Hello');

// console.log(val);


// // 9/15/2020
// const name = 'John';
// const age = 30;
// const job = 'Web Developer';
// const city = 'Miami';
// let html;

// // Insert without template strings (es5)
// html = '<ul><li>Name: ' + name + ' </li><li>Age: ' + age + ' </li><li>Job: ' + job + ' </li><li>City: ' + city + ' </li></ul>';

// // With template strings (es6)
// html = ` 
//     <ul>
//         <li>Name: ${name}</li>
//         <li>Age: ${age}</li>
//         <li>Job: ${job}</li>
//         <li>City: ${city}</li>
//         <li> ${2 + 2}</li>
//         <li></li>
//         <li></li>
//     </ul>
// `;

// // Arrays & Array Methods

// const numbers = [1,2,3,4,36,5];
// const numbers2 = new Array(22,45,23,36,334,78);
// //  Can be an array of strings
// const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
// const mixed = [22,'Hello', true, undefined, null, {a:1, b:1}, new Date()];

// let val;

// // Get array length
// val = numbers.length;
// // Check if array
// val = Array.isArray(numbers);
// // Check single value
// val = numbers[3];
// val = numbers[0];
// // Insert into array
// numbers[2] = 100;
// // Find index of value
// val = numbers.indexOf(36);

// // Mutating arrays
// // Add on to end
// numbers.push(250);
// // Add on to front
// numbers.unshift(250);
// // Take off from end
// numbers.pop();
// // Take off from front
// numbers.shift();
// // Splice values
// numbers.splice(0,3);
// // Reverse the array
// numbers.reverse();
// // Concatenate Array
// val = numbers.concat(numbers2);
// // Sorting arrays
// val = fruit.sort();
// val = numbers.sort(); //Sorting by the first number
// // Use compare function to fix this
// val = numbers.sort(function(x, y){
//     return x-y;
// })

// // Reverse sort
// val = numbers.sort(function(x, y){
//     return y-x;
// })

// // Find
// function underFifty(num) {
//     return num < 50;
// }

// val = numbers.find(underFifty);


// console.log(numbers);
// console.log(val);


// // Object literals
//  const person = {
//      firstName: 'Steve',
//      lastName: 'Smith',
//      age: 30,
//      email: 'steve@aol.com',
//      hobbies: ['music', 'sports'],
//      address: {
//          city: 'Miami',
//          state: 'FL'
//      },
//      getBirthYear: function() {
//          return 2017 - this.age;
//      }
//  }

//  let val;

//  val = person;

// // Get specific value
// val = person.firstName;
// val = person.age;
// val = person.hobbies[0];
// val = person.address.state;
// val = person.address.city;
// val = person.getBirthYear();

//  console.log(val);

// const people = [
//     {name: 'John', age:30},
//     {name: 'Mike', age:23}
// ];

// for(let i = 0; i < people.length; i++) {
//     console.log(people[i].name);
// }



// // Date object & Times

// let val;

// const today = new Date();
// // const birthday = new Date('9-10-1982');
// let birthday = new Date('September 10 1982');
//                         // 9/10/1981
// // val = birthday;
// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();

// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setFullYear(1985);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setSeconds(25);

// console.log(birthday);




// // If statements & Comparison Operators



// if (something) {
//     do something
// } else {
//     do something else
// }

const id = '100';

// // equal to
// if (id == 100) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT')
// }

// // Not equal to
// if (id != 100) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT')
// }

// // Equal to value and type
// if (id === 100) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT')
// }

// // Not equal to value and type
// if (id !== 100) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT')
// }

// // Check if something is undefined
// if(typeof id !== 'undefined'){
//     console.log(`The ID is ${id}`);
// } else {
//     console.log('NO ID');
// }

// // Greater or less than
// if (id > 200) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT')
// }

// // If Else
// const color = 'yellow';

// if(color === 'red'){
//     console.log('Color is red');
// } else if(color === 'blue'){
//     console.log('Color is blue');
// } else {
//     console.log('Color is not red or blue.');
// }

// // Logical operators

// const name = 'Steve';
// const age = 25;

// // And &&
// if(age > 0 && age < 12){
//     console.log(`${name} is a child.`);
// } else if(age > 13 && age <= 19) {
//     console.log(`${name} is a teenager.`);
// } else {
//     console.log(`${name} is an adult.`)
// }

// // Or ||
// if(age < 16 || age >65){
//     console.log(`${name} can not run in the race.`)
// } else {
//     console.log(`${name} is registered for the race.`)
// }



// // Ternary operator
// console.log(id === 100 ? 'Correct' : 'Incorrect');

// // Without braces
// if(id === 100)
//     console.log('Correct');
// else
//     console.log('Incorrect');
