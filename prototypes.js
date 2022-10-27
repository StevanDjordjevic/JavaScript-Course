// TASKS
// PROTOTYPES
// TASK 1.1 Given the following objects:
/*
Use __proto__ to assign prototypes in a way that any property lookup will follow the path: 
pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
*/

let head = {

    glasses: 1
  
  };
  
  
  let table = {
  
    pen: 3,
    __proto__: head
  
  };
  
  
  let bed = {
  
    sheet: 1,
  
    pillow: 2,
    __proto__: table
  
  };
  
  
  let pockets = {
  
    money: 2000,
    __proto__: bed
  
  };

  alert( pockets.pen ); 
alert( bed.glasses ); 
alert( table.money ); 

// 1.2 Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.

/* I found some explanation on the Internet, it goes like this: there’s no difference whether we take
 a property from an object or its prototype. They remember where the property was found and reuse it in the next request. */


 /* TASK 2.1 We have rabbit inheriting from animal.
If we call rabbit.eat(), which object receives the full property: animal or rabbit?
*/

let animal = {

    eat() {
  
      this.full = true;
  
    }
  
  };
  
  let rabbit = {
  
    __proto__: animal
  
  };
  
  
  rabbit.eat();

  // The rabbit recieves the full property because "this" in function represents the object, which in this case is rabbit.

