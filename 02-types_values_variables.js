//* Note: The FollOwing Javascript File is best viewd in VS Code after installing Better Comments Extensions.


//TODO                  100 DAYS OF CODE CHALLENGE - DAY 02

//TODO                  TOPIC - Types, Values & Variables



//? NUMBERS
/*
JavaScript does not make a distinction between integer values and floating-point values. 
All numbers in JavaScript are represented as floating-point values.
When a number appears directly in a JavaScript program, it’s called a numeric literal.
Arithmetic in JavaScript does not raise errors in cases of overflow, underflow, or division by zero. 
When the result of a numeric operation is larger than the largest representable number (overflow), the result is a special infinity value, 
which JavaScript prints as Infinity. when a negative value becomes larger than the largest representable negative number, 
the result is negative infinity, printed as -Infinity. The infinite values behave as you would expect: adding, subtracting, multiplying, or dividing
them by anything results in an infinite value.

Examples:-


var x = Infinity - (Infinity);
var y = Infinity/(Infinity);
var z = Infinity*Infinity;
var x1 = Infinity - (-Infinity);
var y1 = Infinity/(-Infinity);
var z1 = Infinity*(-Infinity);

console.log(x,y,z,x1,y1,z1);


*/

//? Underflow
/*
Underflow occurs when the result of a numeric operation is closer to zero than the
smallest representable number. In this case, JavaScript returns 0. If underflow occurs
from a negative number, JavaScript returns a special value known as “negative zero.”
This value is almost completely indistinguishable from regular zero and JavaScript
programmers rarely need to detect it.

Division by zero is not an error in JavaScript: it simply returns infinity or negative
infinity. There is one exception, however: zero divided by zero does not have a welldefined value, 
and the result of this operation is the special not-a-number value, printed as NaN.
*/


//? NaN

/*
The not-a-number value has one unusual feature in JavaScript: it does not compare
equal to any other value, including itself. This means that you can’t write x == NaN to
determine whether the value of a variable x is NaN. Instead, you should write x != x.
That expression will be true if, and only if, x is NaN. The function isNaN() is similar. It
returns true if its argument is NaN, or if that argument is a non-numeric value such as
a string or an object. The related function isFinite() returns true if its argument is a
number other than NaN, Infinity, or -Infinity
*/

//? Dates and Times
/*
Core JavaScript includes a Date() constructor for creating objects that represent dates
and times. These Date objects have methods that provide an API for simple date computations. 
Date objects are not a fundamental type like numbers are.
*/

//? String
/*
A string is an immutable ordered sequence of 16-bit values, each of which typically
represents a Unicode character—strings are JavaScript’s type for representing text. The
length of a string is the number of 16-bit values it contains. JavaScript’s strings (and its
arrays) use zero-based indexing: the first 16-bit value is at position 0, the second at
position 1 and so on. The empty string is the string of length 0. JavaScript does not have
a special type that represents a single element of a string. 
*/

//? Escape Sequence

/*
The backslash character (\) has a special purpose in JavaScript strings. Combined with
the character that follows it, it represents a character that is not otherwise representable
within the string. For example, \n is an escape sequence that represents a newline
character.
*/


//? Length of String

/*
var x = "I am a string";
var y = x.length;
console.log(x);
console.log(y);
*/


//? NUll
/*
Null is a language keyword that evaluates to a special value that is usually used to
indicate the absence of a value. Using the typeof operator on null returns the string
“object”, indicating that null can be thought of as a special object value that indicates
“no object”. 
*/

//? Undefined

/*

JavaScript also has a second value that indicates absence of value. 
The undefined value represents a deeper kind of absence. 
It is the value of variables that have not been initialized and the value you get when you query the value of an object property or array
element that does not exist.*/

//!The undefined value is also returned by functions that have no return value, and the value of function parameters 
//!for which no argument is supplied. undefined is a predefined global variable (not a language keyword like null) 
//!that is initialized to the undefined value. 

/*
function no_return_value(a){
    console.log(`I am printing the inside value of paramaeter = ${a}`);
    
    }
    
    var x = no_return_value(1);
    console.log(x);


function return_value(a){
console.log(`I am printing the inside value of paramaeter = ${a}`);
return a*a;
}
return_value(1);


var  y= return_value(1);
console.log(y);

*/

//? Global Object

/*

The global object is a regular JavaScript object that serves a very important purpose: the properties
of this object are the globally defined symbols that are available to a JavaScript program.
When the JavaScript interpreter starts (or whenever a web browser loads a new page),
it creates a new global object and gives it an initial set of properties.

In client-side JavaScript, the Window object serves as the global object for all JavaScript
code contained in the browser window it represents. This global Window object has a
self-referential window property that can be used instead of this to refer to the global
object. The Window object defines the core global properties, but it also defines quite
a few other globals that are specific to web browsers and client-side JavaScript.

*/

//? Wrapper Object

/*
JavaScript objects are composite values: they are a collection of properties or named
values. We refer to the value of a property using the . notation.
*/

//! When the value of a property is a function, we call it a method. 

/*
The temporary objects created when you access a property of a string, number, or
boolean are known as wrapper objects, and it may occasionally be necessary to distinguish a 
string value from a String object or a number or boolean value from a Number or Boolean object. 
*/

//! String, Number, and Boolean values differ from objects in that their properties are read-only and that 
//! you can’t define new properties on them.

//? Immutable Primitive Values and Mutable Object References

/*

Objects are not compared by value: two objects are not equal even if they have the same
properties and values. And two arrays are not equal even if they have the same elements
in the same order

Objects are sometimes called reference types to distinguish them from JavaScript’s
primitive types. Using this terminology, object values are references, and we say that
objects are compared by reference: two object values are the same if and only if they
refer to the same underlying object



var a = [1, 2, 3];
var b = [1,2,3];
var c = a;
c[1]= 4;
console.log(c);
console.log(a===b);
console.log(a===c);

*/


//? Global Scope and Function Scope
/*
var x=3;

function print(x){
    x=4;
    console.log(x);}
print(x);
*/

//Function Scope
/*
function scope_checker(){
    var x = 10;
    
    function inner(a){
        var y = 11;
        var z = x+y;
        console.log( `this is ${a} value ${z+1}`);
        return z;
    }
    inner(5);
    console.log(z+1);
}

scope_checker();
*/
