// DAY1	

// Q.1) Difference between " == "  and " === " operators.	

// Both are the comparison operators.

// Double Equals ( == ) checks for value equality only. It is not check data type.  
// This means that before checking the values, it converts the types of the variables to match each other.

// Triple Equals ( === ) check value equality as well as data type of variable also.


// Q.2) What is the spread operator?	


// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

// EXAMPLE .
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];


// Q.3) What are the differences between var, let and const?

// i) In let and const two variable with same name aren't possible, but with var it is possible.

// ii) In case of const we can't reassign or update the value of variable which have already been initialized.
// In let only update not reassign
// but in case of var we can we can't reassign / update the value of variable which have already been initialized.

// iii) let and const are block scope as the var has global scope.

// iv) let and const are not supporting hoisting as the var supports hoisting.



// Q.4) What is execution context	

// Execution context (EC) is defined as the environment in which the JavaScript code is executed. 
// The execution context decides what particular piece of code has access to variables, functions, objects, etc.

// Q.5) What is meant by first class functions	


// Q.6) What are closures? Give an example of closure

// It is a combination of functions that gives us an access to an outer function's scope from an inner function.