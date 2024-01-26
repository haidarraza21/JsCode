/* JavaScript Strings
JavaScript strings are for storing and manipulating text.
A JavaScript string is zero or more characters written inside quotes.
 */

//let text = "Haidar Raza" //String written inside quotes


//You can use single or double quotes:
let text1 = "Jaipur" //Double quotes
let text2 = 'Rajasthan' //Single quotes

/*String lenght
To find the lenght of a string, use the built-in lenght property:
 */
let text3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lenght = text3.length;
console.log(lenght);

/*JavaScript Strings as Objects

Normally, Javascript strings are primitive values, created from literals:
 */
let x = "Haidar" 
let y = new String("Haidar"); 
console.log(typeof x );  //string
console.log(typeof y );  //object
console.log( x == y );   //true
console.log( x === y );  //false

//Computing two JavaScript objects always return false

let name = new String("Haidar");
let name1 = new String("Haidar");
console.log( name == name1 ); //false

/*JavaScript String Methods
String lenght
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
Srting padStart()
String padEnd()
String charAt()
String charCodeAt()
Srting split()
 */

/*JavaScript String lenght
The lenght property returns the lenght of a string*/

let text4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lenght1 = text3.length;
console.log(lenght1);

/*JavaScript String Slice()
slice() extracts a part of a string and retuns the extracted part in a new string

The method takes 2 parameters: start position, and end position (end not included).*/

//Slice out a portion of  a string from position 7 to positon 13:

let text6="Apple, Banana, kiwi";
let part = text6.slice(7,13);
console.log(part); //Banana

/*Note:- 
JavaScript counts positions from zero.
First position is 0.
Second position is 1. */

//If you the second parameter, the method will out the rest of the string:

let text7="Apple, Banana, kiwi";
let part1 = text6.slice(7);
console.log(part1); //Banana, kiwi

//If a parameter is negative, the position is counted from the end of the string:

let text8="Apple, Banana, kiwi";
let part2 = text6.slice(-12);
console.log(part2); //Banana, kiwi

//This example slices out a portion of a string from position -12 to position -6:

let text9="Apple, Banana, kiwi";
let part3 = text6.slice(-12);
console.log(part3); //Banana

/*JavaScript String Substring()
substring() is similar to slice().
The difference is that start and end values less than 0 are treated as 0 in substring() */

let str ="Apple, Banana, Kiwi";
let part4 = str.substring(7,13);
console.log(part4); //Banana
//If you omit the second parameter, substring() will slice out the rest if the string.

/**JavaScript String substr()
 substr() is similar to slice().
 The difference is that the second parameter specifies the lenght of the extracted part.
 */

 let str11 = "Apple, Banana, Kiwi";
 let part5 = str11.substr(7,6); // Banana, Kiwi
 let part6 = str11.substr(7,12); //Banana
 console.log(part6);
 console.log(part5);

 //If you omit the second parameter, substr() will slice out the rest of the string.

 let str3 = "Apple, Banana, Kiwi";
 let part7= str3.substr(7)
 console.log(part7); // Banana, Kiwi
 let part8= str3.substr(0)
 console.log(part8); //Apple, Banana, Kiwi

 //If the first parameter is negative, the position counts from the end of the string.

 let srt ="Apple, Banana, Kiwi";
 let part9= str.substr(-4) //Kiwi
 console.log(part9);

 /*Replacing String Content
 
 The replace() method replaces a specified value with another value in a string*/
 let text10= "Please visit Microsoft!";
 let text110 = text10.replace("Microsoft", "W3Schools");
 console.log(text110); //Please visit W3Schools!

 /*Note:- The replace() methode dose not change the string it is called on.
 The replace() methode returns a new string.
 The replce() methode replces only the first match 
 If you want to replace all matches, use a regular expression with the /g flag set. See examples below
 
 By default, the replace() methode replaces only first match:*/

 let text11="Please visit Microsoft and Microsoft!";
 let newText = text11.replace("Microsoft", "W3Schools");
 console.log(newText);

 //By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:

 let text12 = "Please visit Microsoft!";
 let newText1 = text12.replace("MICROSOFT","W3Schools")
 console.log(newText1);

 //To replce case insensitive, use a regular expression with an /i flag(insensitive):

 let text13 = "Please visite Microsoft!";
 let newText2 = text13.replace(/MICROSOFT/i,"W3Schools");
 console.log(newText2);

 /*Note 
 Regular expression are written without quotes.
 
 
 To replace all matches, use a regular expression with a /g flag (global match):*/

 let text14 = "Please visit Microsoft and microsoft!";
 let newText3 = text14.replace(/Microsoft/g, "W3Schools");
 console.log(newText3);


/*JavaScript String ReplaceAll()

In 2021, JavaScript introduced the string methode replaceAll()
 */

let text15 = "I love cats. Cats are very easy to love. Cats are very popular"
text = text15.replaceAll("Cats","Dogs");
text = text15.replaceAll("Cats","Dogs");
console.log(text);
















