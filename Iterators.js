//closure
// function createNewFunction() {
//   function add2 (num) {
//     return num+2;
//   }
//   return add2;
// }

// const newFunction = createNewFunction();
// const result = newFunction(3);


// Using closure to access array
// ITERATOR CONCEPT
function createNewFunction(array) {
  let i = 0;
  const iterator = {
    next: function() {
      return array[i++];
    }
  }
  return iterator;
}



const newFunction = createNewFunction([1,2,3,4,5]);
console.log(newFunction.next());
console.log(newFunction.next());
console.log(newFunction.next());