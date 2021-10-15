
//* Note: The FollOwing Javascript File is best viewd in VS Code after installing Better Comments Extensions.


//TODO                  100 DAYS OF CODE CHALLENGE - DAY 03

//TODO                  TOPIC - Statement


//? Control Structures

/*
Types

(1) Conditionals: Value of Expression
    -if/ifelse/elseif
    -switch

(2) Loops: Repetition
    -while,do/while, for, for/in

(3) Jumps: Jump to other part of the Program.
    -return
    -break
    -throw
*/

//? Empty Statement

//Imporatnce of empty statement
/*
var a = [1,2 , 3, 4, 5];

for(let i=0; i< a.length; a[i++]= "aplha "+ i)      //without an empty sttement hence console.log becomes it part
console.log(a);                 
/*console.log(a);                                     //this is a separate statement

for(let i=0; i< a.length; a[i++]= "aplha "+ i)/*empty/; //commenting out the use of the empty statement
*/

//? Hoisting

/*The declaration is “hoisted” up to the start of the script or function. 
Initialization, however, occurs at the location of the var statement, and the value of the variable is 
undefined before that point in the code.*/


// Importance of Declaration

/*
console.log(a);
var a = 0;
console.log(a);
console.log(b);
b = 1;
*/

// Difference between let and const

/*
console.log(l);
console.log(k);
let k =6; const l=5;       // Temporal Deadzone hence facing Reference Error
console.log(k, l);
*/

//? Switch

/*
The matching case is determined using the === identity operator,
not the == equality operator, so the expressions must match without any type
conversion.
*/


/*

var input = 'admin ';       

switch(input){

    case 'user':
    console.log(`The quantity recieved is 1`);
    break;

    case 'admin': console.log(`The quantity recieved is 2`);
    break;

    case 'guest': console.log(`The quantity recieved is 3`);
    break;

    case 'incognito': console.log(`The quantity recieved is 4`);
    break;

    default: console.log(`Matching Results not Found`);

}

*/

//? Sequence of operation of For Loop


/*

Syntax:
for(initialize ; test ; increment) 
statement


Sequence:

initialize;
while(test) {
statement
increment;
}

*/



