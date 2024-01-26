/*JavaScript Arrays

An array is a special variable, which can hold more than one value */

const cars = ["Thar", "Volvo", "BMW"];
console.log(cars);

/*Why Uses Arrays?

If you have a list of iteams (a list of car names,for example), storing the cars in single variables could look like this:*/

let car1 = "Thar"
let car2 = "Volvo"
let car3 = "BMW"

/*However, what if you want to loop through the cars and find a sprcific one? And what if you had not 3 cars, but 300?

This solution is an array!

An array can hold many values under a single name, and you can access the value by referring to an index number.


Creating an Array

Using an array literal is the easiest way to create a JavaScript Array.


Syntex:
const array_name = [item1, item2, ....];

Example 
*/ 

const name = ["Hiadr", "Asadullah", "Hamza", "Nahid"]
console.log(name);

const cars1 = new Array ("Saab", "Volvo", "BMW")
console.log(cars1);

/*Accessing Arrays Elements

You access an array element by referring to the index number:*/

let car = cars1[0];
let car4 = cars1[2];
let car5 = cars1[1];

console.log(car);
console.log(car4);
console.log(car5);

//Note: Array indexes start with 0. [0] is the first element. [1] is the second element.

/*Changing an Array Element

This statement changes the value of the first element in cars:*/

cars1[0] = "Opel"
console.log(cars1);

name[2] = "Ahmad"
console.log(name)

/*Converting an Array to a String

The JavaScript method toString() converts an array to a string of (common separated) array values.*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString())

/*Arrays are Objects

Arrays are a special type of objects. The typeof operstor in JavaScript returns "object" for arrays.

But, JavaScript arrays are best described as arryas.

Arrays use numbers to access itd "elements". In this example, person[0] returns Pintu:
*/

const person = ["Pintu", "Naman", "Ujjawal", 21];
console.log(person[0]);

//Objects use names to access its "members". In this example, person1.firstName retuns Pintu:

const person1 = {firstName:"Pintu", lastName:"Kumar", agr:21};
console.log(person1.firstName)

/*Array Elements Can Be Objects
JavaScript variables can be oblects. Arrays are special kinds of objects.

Because of this, you can have variables of diffrent type in the same Array.

You can have pbjects in an Array. You can have functions in an Array, You can have arrays in an Array:

myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;
*/

/*The lenght property

The lenght property of an array returns the lenght of an array (the number of array elements) */

let lenght = fruits.length;
console.log(lenght);

//The length property is always one more than the highest array index.

/*Accessing the First Array Element */
let fruit = fruits[0];
console.log(fruit);

//Accssing the Last Array Element

let fruit1 = fruits[fruits.length -1];
console.log(fruit1);


/*Adding Array Elements

The easiest way to add a new element to an array is using the push() methid:*/

fruits.push("Lemon");
console.log(fruits);

//New element can also be added to an array using the length property:

fruits[fruits.length] = "Kiwi";
console.log(fruits);


//Associative Arrays

const person2 = [];
person2[0] ="Haidar";
person2[1] ="Hamza";
person2[2] = "Asadullah";
person2[3] =67;

console.log(person2.length);
console.log(person2[0]);

/*JavaScript new Array()

JavaScript has a built in arrya constructor new Array()

But you can safely use [] instead.

These two diffrent statements both create a new empty named points:*/

const points = new Array(40, 200, 1, 5, 25, 10);
const points1 = [40, 100, 1, 5, 25, 10];

console.log(points[0]);
console.log(points1[0]);

//Create an array with three elements:

const points2 = new Array(40, 100, 1);
console.log(points2);


//How to Recognize an Array

console.log(typeof [fruits]);