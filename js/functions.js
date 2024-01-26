/*
JavaScript Functions

A JavaScript function is a lock of code desingned to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).

*/

//Function to compute the product of p1 and p2

function myFunction (p1,p2) {
    return p1 * p2;


}

let result = myFunction (3,4);
console.log(result);

/*
JavaScript Function Syntax

A JavaScript function is defined with the function keyword, following by a name, followed by parentheses().

Function names can conatin letter, digits, underscode and dollor signs (same rules ass variables)

The parenthases may include parameter names separated by commas:
(parameter1,parameter2,....) 

The code to be executed, by function, is placed inside curly brackect{}.

*/

function add (a,b){
return a+b; 
}
let result1 = add (23,56)
console.log(result1);

/*Function parameters are listed inside the parantheses () in the function definition.

Function arguments are the values received by the function when it is invoked.

Inside the function, the arguments (the parameters) behave as a local variables.
*/

/*
Function Invocation

The code inside the function will execute when "something" invokes (calls) the function:

when an event occurs (when a user clickes a button)
when it is invoked (called) from Javascript code
Autometically (self invoked)

*/

/*
Function Return

When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a stsment, JavaScript will return to execute the code after the invoking statement.

Functions often compute a return value. The return value is "returned" back to the "caller"
*/

//Calculate the product of two numbers, and return the result:

function multiple (a,b){
    return a*b; 
}
let result2 = multiple (23,56)
console.log(result2);

/*
Why Function?
With fuctions you can resuse code
You can write code that can be used many times.
You can use the same coode with different argumenrts, to produce diffrenrt results.
*/

//The () Operator


//Convert Fahrenheit to Celsius

function toCelsius (Fahrenheit){
    return (5/9) * (Fahrenheit - 32);
}
let value = toCelsius(77);
console.log(value);

function toCelsius (Fahrenheit){
    return (5/9) * (Fahrenheit - 32);
}
let value1 = toCelsius(); // Accessing a function with incorrect parameters can return an incorrect answer.
console.log(value1);


function toCelsius (Fahrenheit){
    return (5/9) * (Fahrenheit - 32);
}
let value3 = toCelsius; // Accessing a function without() returns the function and not function result. 
console.log(value3);

/*
 Functions Used as variable Values

 Functions can be used the same way as you use variables, in all types of fulmulas, assigments, and calculations
 */

 let text = "The temperature is "+ 
 toCelsius(77) + " Celsius.";
 console.log(text);

 let x = toCelsius(77)
 let text1 = "The temperature is "+ 
 x + " Celsius.";
 console.log(text1);

 /*
 Local Variables 

 Variables declared within a JavaScript function, become LOCAL to the function.

 Local variables can only be accessed from within the function.
 */

 let text5 = "Outside: " + typeof carName;

 function myFunction(){
    let carName = "Volvo";
    let carName1 = "Inside: "  + typeof 
    carName + " " + carName;
 }  
  console.log(text5);
 
