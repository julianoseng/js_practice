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
