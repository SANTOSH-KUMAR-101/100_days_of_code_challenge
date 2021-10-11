//Note: The Follwing Javascript File is best viewd in VSCode Editor after installing Better Comments Extensions.

//TODO                  100 DAYS OF CODE CHALLENGE - DAY 01

//TODO                  TOPIC - INTRODUCTION TO JAVASCRIPT

/*

//? What is Javascript?

    Defintion-

        JavaScript is a high-level, dynamic, untyped interpreted programming language that is well-suited to 
        object-oriented and functional programming styles.

        
//? Brief History-

    Various Names

        JavaScript was created at Netscape.  “JavaScript” is a trademark licensed from Sun Microsystems (now Oracle) used to describe
        Netscape’s (now Mozilla’s) implementation of the language. Netscape submitted the language for standardization to 
        ECMA—the European Computer Manufacturer’s Association—and because of trademark issues, the standardized version of the language
        was stuck with the awkward name “ECMAScript.”For the same trademark reasons, Microsoft’s version of the language is formally 
        known as “JScript.”

        
        There are Various Engines to interpret Javascript for eg. Google calls its JavaScript interpreter V8.
    

//? Character Set
    
    Unicode Character Set
        Unicode is a superset of ASCII and Latin-1 and supports virtually every written language currently used on the planet. 
        ECMAScript 5 requires implementations to support Unicode 3 or later.



//? Case Sensitivity

    Javascript is Case Sensitive language whereas the HTML is not a Case Sensitive Language. 
    While these tags and attribute names can be typed in any case in HTML, in JavaScript they typically must be all lowercase. 
    For example, the HTML onclick event handler attribute is sometimes specified as onClick in HTML, but it must be specified as onclick in JavaScript code (or in XHTML documents)


//? Literals
    
    A literal is a data value that appears directly in a program.


//? Identifiers

    An identifier is simply a name.
    In JavaScript, identifiers are used to name variables and functions and to provide labels for certain loops in JavaScript code. 
    A JavaScript identifier must begin with 
        a letter, 
        an underscore (_), or 
        a dollar sign ($). 
    Subsequent characters can be 
        letters, 
        digits, //!(Digits are not allowed as the first character so that JavaScript can easily distinguish identifiers from numbers.) 
        underscores, or 
        dollar signs. 
    

//? Semicolon

    There are two exceptions to the general rule that JavaScript interprets line breaks as
    semicolons when it cannot parse the second line as a continuation of the statement on
    the first line. 
    
    (1) The first exception involves the 
            return, 
            break, and 
            continue statements. 
    
        These statements often stand alone, but they are sometimes followed by an identifier or expression. 
        If a line break appears after any of these words (before any other tokens), 
        JavaScript will always interpret that line break as a semicolon.

    (2) The second exception involves the ++ and −− operators. These operators can be prefix operators that appear 
        before an expression or postfix operators that appear after an expression. 
        If you want to use either of these operators as postfix operators, they must appear on the same line as the 
        expression they apply to. Otherwise, the line break will be treated as a semicolon, and 
        the ++ or -- will be parsed as a prefix operator applied to the code that follows.


//? Javascript Types

    These are divided into two categories:
        (1) Primitive
                Numbers        
                Strings
                Boolean
                Null
                Undefined
        
        (2) Object
                Array (Specila Object type)
                Function (Specila Object type)
                Date-Class
                RegExp-Class
                Error-Class

            An object (that is, a member of the type object) is a collection of properties where each property 
            has a name and a value (either a primitive value, such as a number or string, or an object)

//?Constructors

    Functions that are written to be used (with the new operator) to initialize a newly created object are known as constructors. 
    Each constructor defines a Class of objects—the set of objects initialized by that constructor.
    
    //*Class
         Classes can be thought of as subtypes of the object type. 
    
//? Javascript is Object Oriented Language
    
    Loosely, this means that rather than having globally defined functions to operate on values of various types, the types themselves
    define methods for working with values.

//? Methods

    Technically, it is only JavaScript objects that have methods. But numbers, strings, and boolean values behave as if they had
    methods. 
    //! Null and Undefined are the only values that methods cannot be invoked on.


//? Mutable and Imutable

    JavaScript’s types can be divided into primitive types and object types. And they can be divided into types with methods and 
    types without. They can also be categorized as mutable and immutable types. 
    
    A value of a mutable type can change. Objects and arrays are mutable: a JavaScript program can change the values of object 
    properties and array elements. 
    
    Numbers, booleans, null, and undefined are immutable—it doesn’t even make sense to talk about changing the value of a number, for example. 
    
    Strings can be thought of as arrays of characters, and you might expect them to be mutable. In JavaScript, however, strings are 
    immutable: you can access the text at any index of a string,but JavaScript provides no way to alter the text of an existing string. 

//? Varibales

    JavaScript variables are untyped: you can assign a value of any type to a variable, and you can later assign a value of a 
    different type to the same variable. Variables are declared with the var keyword. 
    
    JavaScript uses lexical scoping. Variables declared outside of a function are global variables and are visible everywhere in a 
    JavaScript program. Variables declared inside a function have function scope and are visible only to code that appears inside 
    that function. 
