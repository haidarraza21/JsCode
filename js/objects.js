/*
JavaScript Objects

Real Life Objects, Properties, and Methods

In real life, a car is an object.
A car has properties like weight and color, and method like start and stop:
All cars have the same propertis, but the property value differ from car to car.
All cars have the same methods, but the methods are performed at different times
*/

/**
 JavaScript Objects

 You have already learned that JavaScript variables are containers for data values.
 This code assigns a simple value (Fiat) to a variable named car
 */
let car = "Fait"
console.log(car); //Fait

//This code assigns many values(Fait,900,Black) to a variables named car1:

const car1 = { type: "Fait", model: "900", color: "Black"}
console.log(car1.type); //Fait
console.log(car1.model); //900
console.log(car1.color); //Black
console.log ("The car type is "+ car1.type); //The car type is Fait

/**
 Object Definition

 You define (and create) a JavaScript object with an object literal:
 */

 const person = {
    firstName: "Haidar", lastName:"Raza", age:"21", eyeColor:"Blue"
 };

 console.log(person.firstName + " is " + person.age + " years old."); //Haidar is 21 years old.
console.log(person.firstName + " " + person.lastName); //Haidar Raza

const person2 = {
    firstName: "Haidar", lastName:"Raza", age:"21", eyeColor:"Blue",
    fullName: function (){
        return this.firstName + " " +this.lastName ;
    }
 };
 console.log(person2.fullName()); //Haidar Raza

 /* In this example above, this refers to the person object
  I.E this.firstName means the firstName property of this.

  I.E this.firstName means the firstName property of person.

  What is this? 
  In JavaScript, the this keyword refers to an object.
  Which object depends on how this is being invoked (used or called).


   Note :- this is not a variables, It is a keyword. You cannot change the value of this
 */
