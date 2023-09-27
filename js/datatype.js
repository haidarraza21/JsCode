// Numbers

let lenght =16;
let weight = 7.5

console.log(typeof (lenght));

// Strings:

let color = "Yello";
let Name ="Raza"

console.log(typeof (Name));

//Booleans:

let x =true;
let y = false;

console.log(typeof y);

//Objects:

const person ={firstName : "Haidar", lastName :"Raza"};

console.log(typeof person);

//Array Object:

const cars = ["Volvo","BMW","Thar"];

console.log(typeof cars);

//Data Object:

const date = new Date("2023-03-21");

console.log(typeof date);

/*
In programming language, data types is an important concept.

To be able to operate on variables, it is important to know something about the type  

Without data types, a computer cannot safely solve.
*/

let a = 16 + "Haidar" // 16Haidar

console.log(a);
console.log(typeof a) // When adding a number and a string, Javascript will treat the number as a string

let b ;
c=5;
d="Haidar";
console.log(b);
console.log(typeof b); //undefined 
console.log(typeof c); //Number
console.log(typeof d); //String

/*JavaScript String
A string is a sreies of characters like "Haidar"

Srting are writen with quotes. You can use single or double quores.
*/

let firstName = 'Haidar' //Using single quotes 
let lastName = "Raza" //Using double quotes

// Single quotes inside double quotes:

let answer1 = "It's alright";
console.log(answer1) //It's alright

let answer2 = "He is called 'Haidar'";
console.log(answer2); //He is called 'Haidar'

//Double quotes inside the single quotes

let answer3 = 'He is called "Haidar"';
console.log(answer3); //He is called "Haidar"


/*
JavaScript Numbers

All JavaScript numbers are stored as decimal numbers (floating point).

Numbers can be written with, or without decimal
*/

//With decimal
let x1=30.3;

//without decimal
let x2 = 45;

console.log(x1,x2);

/*Exponential Notation

Extra large or exrta small numbers can be written with scintific (exponential) notation
*/

let y1 = 12e2;
let y2 =212e-3;

console.log(y1,y2);


/*
JavaScript Bigint

All JavaScript number are stored in 64-bit floating point format.

JavaScript Bigint is a new datatype(ES2020) that can ne used to stored integer values that are too big to be representated by a normal JavaScript Number.
*/ 

let x5 = BigInt("12234567890123456789012345")
console.log(typeof x5); //bigint

/* JavaScript Booleans 
Booleans can only have two values: true or false.

Booleans are often used in conditional testing
*/

let x6 = 5;
let x7 = 5;
let x8 = 7;
console.log(x6==x7); //true
console.log(x6==x8); //false

/*
JavaScript Array

JavaScript arrays are written with square brackets.

Array items are separeted bt commas.

Array indexes are zero-based, which means the first iteam [0], second is [1],and so on.
*/

const cars2 =["BMW","Thar","Volvo"];
console.log(cars2 [0]); //BMW 

/*
JavaScript Object 

Javascript objects are written with curly braces {}.

Object properties are written as name: value pairs,seprated by commas
*/

const person1 = { firstNamr:"Haidar",lastName:"Raza",age:18,eyeColor:"blue"}


console.log(person1.firstNamr + " is " + person1.age + " yeares old ");







