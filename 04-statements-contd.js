// Note: The FollOwing Javascript File is best viewd in VS Code after installing Better Comments Extensions.


//TODO                  100 DAYS OF CODE CHALLENGE - DAY 03

//TODO                  TOPIC - Statement


//? for Loop

/*

 Intiatliser in the begining of For Loop may be omitted from a for loop, but the two semicolons are required. 
 If you omit the test expression, the loop repeats forever, and for(;;) is another way of writing an infinite loop, like while(true).

 */

//? for/in

/*

for/in loop is used in case of object

Example:-
    for(var p in o) // Assign property names of o to variable p
    console.log(o[p]); // Print the value of each property.

To execute a for/in statement, the JavaScript interpreter first evaluates the object expression. If it evaluates to null or undefined, the interpreter skips the loop and moves
on to the next statement.3 If the expression evaluates to a primitive value, that value i converted to its equivalent wrapper object.

The for/in loop does not actually enumerate all properties of an object, only the enumerable properties.

*/

//? Jump

/*

These cause the JavaScript interpreter to jump to a new location in the source code.

//* Break:      The break statement makes the interpreter jump to the end of a loop or other statement.
//* Continue:   It makes the interpreter skip the rest of the body of a loop and jump back to the top of a loop to begin a new iteration. 
//* Return:     The return statement makes the interpreter jump from a function invocation back to the code that invoked it and also supplies the value for the invocation. 
//* Throw:      The throw statement raises, or “throws,” an exception and is designed to work with the try/catch/finally statement, 
    //*         which establishes a block of exception handling code. This is a complicated kind of jump statement: when an exception is thrown, 
    //*         the interpreter jumps to the nearest enclosing exception handler, which may be in the same function or up the call stack 
    //*         in an invoking function.
*/

//? Labeled Statement

/*
Any statement may be labeled by preceding it with an identifier and a colon:
Syntax
    identifier: statement

By labeling a statement, you give it a name that you can use to refer to it elsewhere in your program.
*/

//? break
/*
The break statement, used alone, causes the innermost enclosing loop or switch statement to exit immediately.
Because it causes a loop or switch to exit, this form of the break statement is legal only if it appears inside one of these statements.

JavaScript also allows the break keyword to be followed by a statement label (just the identifier, with no colon):
syntax
    break labelname;
*/

//? continue
/*
The continue statement is similar to the break statement. Instead of exiting a loop, however, continue restarts a loop at the 
next iteration. The continue statement’s syntax is just as simple as the break statement’s:
syntax:-
    continue;

The continue statement, in both its labeled and unlabeled forms, can be used only within the body of a loop. 

var cashback = 0;
for(let i = 1; i<=10; i++ ){
    
    cashback = 100*i;
    console.log(`Cashaback after ${i}th iteration   ${cashback}`);
    if(cashback<500)continue;

    else{cashback=500; console.log(`You have reached the daily limit of the Cashback`); break;}
    
    
}

console.log(cashback)


*/

//? Return

/*

A return statement within a function specifies the value of invocations of that function.
A return statement may appear only within the body of a function. 
It is a syntax error for it to appear anywhere else. When the return statement is executed, the function that contains 
it returns the value of expression to its caller.

With no return statement, a function invocation simply executes each of the statements in the function body in turn until 
it reaches the end of the function, and then returns to its caller. In this case, the invocation expression evaluates to undefined. 
The return statement often appears as the last statement in a function, but it need not be last: a function returns to its caller 
when a return statement is executed, even if there are other statements remaining in the function body.



Example:- 

function check_return(para){
    
    if (para>5)
    {console.log(`We are going to square your intput`);return para*para;
}
    else{console.log(`We are going to cube your intput`);return para*para*para;}
    
}

check_return(5);

check_return(9);
*/



//? THROW
/*

An exception is a signal that indicates that some sort of exceptional condition or error
has occurred. To throw an exception is to signal such an error or exceptional condition.
To catch an exception is to handle it—to take whatever actions are necessary or appropriate to recover from the exception. 
In JavaScript, exceptions are thrown whenever a runtime error occurs and whenever the program explicitly throws one using the
throw statement. Exceptions are caught with the try/catch/finally statement.

You might throw a number that represents an error code or a string that contains a human-readable error message. The
Error class and its subclasses are used when the JavaScript interpreter itself throws an
error, and you can use them as well. An Error object has a name property that specifies
the type of error and a message property that holds the string passed to the constructor
function (see the Error class in the reference section).


//* When an exception is thrown, the JavaScript interpreter immediately stops normal program execution and jumps to the nearest exception handler.
*/

//? TRY, CATCH & FINALLY

//* General

/*
The try, catch, and finally blocks all begin and end with curly braces. 
These braces are a required part of the syntax and cannot be omitted, even if a clause contains only a single statement.
The try/catch/finally statement is JavaScript’s exception handling mechanism. 

//* Try

The try clause of this statement simply defines the block of code whose exceptions are to be handled.


//* Catch

The try block is followed by a catch clause, which is a block of statements that are invoked when an exception occurs anywhere within 
the try block.
The catch keyword is followed by an identifier in parentheses.This identifier is like a function parameter. 
When an exception is caught, the value associated with the exception (an Error object, for example) is assigned to this parameter. 
Unlike regular variables, the identifier associated with a catch clause has block scope—it is only defined within the catch block.

//* Finally

The catch clause is followed by a finally block containing cleanup code that is guaranteed to be executed, regardless of what happens 
in the try block.

The finally clause is guaranteed to be executed if any portion of the try block is executed, regardless of how the code in the try block 
completes. It is generally used to clean up after the code in the try clause.

In the normal case, the JavaScript interpreter reaches the end of the try block and then
proceeds to the finally block, which performs any necessary cleanup. If the interpreter
left the try block because of a return, continue, or break statement, the finally block
is executed before the interpreter jumps to its new destination

If an exception occurs in the try block and there is an associated catch block to handle
the exception, the interpreter first executes the catch block and then the finally block.
If there is no local catch block to handle the exception, the interpreter first executes
the finally block and then jumps to the nearest containing catch clause.

If a finally block itself causes a jump with a return, continue, break, or throw statement,
or by calling a method that throws an exception, the interpreter abandons whatever
jump was pending and performs the new jump. For example, if a finally clause throws
an exception, that exception replaces any exception that was in the process of being
thrown. If a finally clause issues a return statement, the method returns normally,
even if an exception has been thrown and has not yet been handled.

try and finally can be used together without a catch clause. In this case, the finally
block is simply cleanup code that is guaranteed to be executed, regardless of what
happens in the try block.
*/

// With Error
/*
try{
    let a = b;

} catch(err){
    console.log(`Error has occured`);
}finally{console.log(`Lets us move on to finally`);}

console.log(`Execution Continues`);




*/

// Without Error

/*

try{
    let a = b=5;
    console.log(`No error occurs hence going to finally`);

} catch(err){
    console.log(`Error has occured`);
}finally{console.log(`Finally is being Executed `);}

console.log(`Execution Continues`);
*/