// Objects
// TASK 1. 
// Write a function count(obj) that returns the number of properties in the object:
/*
let user = {

    name: 'John',
  
    age: 30
  
  };

  console.log( count(user) );

function count(obj)
{
    return Object.keys(obj).length;
}
*/

// TASK 2.
/*There is a salaries object with arbitrary number of salaries.
Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.
If salaries is empty, then the result must be 0. */

function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
  
    return sum;
  }


let salaries = {

    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  console.log( sumSalaries(salaries) ); 

