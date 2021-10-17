// Note: The FollOwing Javascript File is best viewd in VS Code after installing Better Comments Extensions.


//TODO                  100 DAYS OF CODE CHALLENGE - DAY 05

//TODO                  TOPIC - Object

//? Debuggger Statement
/*

Debugger was formally added to the language by ECMAScript 5, but it has been implemented by major browser vendors for quite some time. 
Note that it is not enough to have a debugger available: the debugger statement won’t start the debugger for you. 
If a debugger is already running, however, this statement will cause a breakpoint.

*/

//? What is object?

/*

An object is a composite value: it aggregates multiple values (primitive values or other objects) and allows you to store and
retrieve those values by name.

An object is an unordered collection of properties, each of which has a name and a value. 

Property names are strings, so we can say that objects map strings to values. 

This string-to-value mapping goes by various names: you are probably already familiar with the fundamental data structure 
under the name “hash,” “hashtable,” “dictionary,” or “associative array.”

In addition to maintaining its own set of properties, a JavaScript
object also inherits the properties of another object, known as its “prototype.” 
The methods of an object are typically inherited properties, and this “prototypal inheritance” is a key feature of JavaScript.

Any value in JavaScript that is not a string, a number, true, false, null, or undefined is an object. 
And even though strings, numbers, and booleans are not objects, they behave like immutable objects 

bjects are mutable and are manipulated by reference rather than
by value. If the variable x refers to an object, and the code var y = x; is executed, the
variable y holds a reference to the same object, not a copy of that object. Any modifications 
made to the object through the variable y are also visible through the variable x



var x = 5; var y = 5;       // When only values are equall


var a = {}; var b = {};

console.log(x==y);
console.log(a==b);

var x = y ;          //when only reference is equal


var a = b;

console.log(x==y);
console.log(a==b);



var x = y = 5;          //when reference and values are equal


var a = b = {};

console.log(x==y);
console.log(a==b);


*/

//? Property
/*

A property has a name and a value. 
A property name may be any string, including the empty string, but no object may have two properties with the same name. 
The value may be any JavaScript value, or (in ECMAScript 5) it may be a getter or a setter function (or both). 
In addition to its name and value, each property has associated values that we’ll call //*property attributes:
    • //*The writable attribute specifies whether the value of the property can be set.
    • //*The enumerable attribute specifies whether the property name is returned by a for/in loop.
    • //*The configurable attribute specifies whether the property can be deleted and whether its attributes can be altered.    

In addition to its properties, every object has three //*associated object attributes:
    //*• An object’s prototype is a reference to another object from which properties are inherited.
    //*• An object’s class is a string that categorizes the type of an object.
    //*• An object’s extensible flag specifies (in ECMAScript 5) whether new properties may be added to the object.

*/

//? Category of Object

/*

//*Native Object
• A native object is an object or class of objects defined by the ECMAScript specification. Arrays, functions, dates, and regular 
expressions (for example) are native objects.

//*Host Object
• A host object is an object defined by the host environment (such as a web browser) within which the JavaScript interpreter is embedded.
  Host objects may also be native objects, as when the host environment defines methods that are normal JavaScript Function objects.

//*HTML object
  • The HTMLElement objects that represent the structure of a web page in client-side JavaScript are host objects.


//* User Definded Object
  • A user-defined object is any object created by the execution of JavaScript code.

//*Own property
  • An own property is a property defined directly on an object.

//*Inherited Property
• An inherited property is a property defined by an object’s prototype object
*/

//? Creating Objects

/*

//*Object Literals

An object literal is a comma-separated list of colon-separated name:value pairs, enclosed within curly braces. 
A property name is a JavaScript identifier or a string literal (the empty string is allowed). 
A property value is any JavaScript expression; the value of the expression (it may be a primitive value or an object value) becomes 
the value of the property.


Example:-

var first_object = {            // Creating Object from Literals
    name: "Santosh",
    class: "10th"
}

console.log(first_object.class); //Accessing value of porperty class

first_object.section = "D";

console.log(first_object.section);  //inserting a new property


*/

//? Creating Objects with New

/*

The new operator creates and initializes a new object. The new keyword must be followed by a function invocation. 
A function used in this way is called a constructor and serves to initialize a newly created object. 
Core JavaScript includes built-in constructors for native types.

var o = new Object();       // Create an empty object: same as {}.
var a = new Array();        // Create an empty array: same as [].
var d = new Date();         // Create a Date object representing the current time
var r = new RegExp("js");   // Create a RegExp object for pattern matching

*/

//? Prototypes

/*
Every JavaScript object has a second JavaScript object (or null, but this is rare) associated with it. 
This second object is known as a prototype, and the first object inherits properties from the prototype.*/

//? Querying and Setting Properties

/*

To obtain the value of a property, use the dot (.) or square bracket ([]) operators.
The left-hand side should be an expression whose value is an object.
If using the dot operator, the right-hand must be a simple identifier that names the property. 
If using square brackets, the value within the brackets must be an expression that evaluates to a string that contains the desired property name.
*/

//? Deleting Properties

/*

var b ={
    name: "Santosh" ,
    middle: " Kumar",
    last: "Pasi"
}

console.log(b);
delete b.last;
console.log(b);


*/

