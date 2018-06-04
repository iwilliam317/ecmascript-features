//map, filter, find, every, some, reduce, etc

let array = [1, 2, 3, 4, 5];

array = array
            .map(item => item * 2)
            .filter(item => item > 5)
console.log(array);


//instead of this
// var array = [1, 2, 3, 4, 5];
// var items = [];
// for(var i = 0; i < array.length; i++){
//   if ((array[i] * 2) > 5){
//     items.push(array[i] * 2);
//   }
// }
// console.log(items);


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumberGreaterThanFifteen = numbers
.map(number => number * 3)
.filter( number => number % 2 == 0)
.filter(number => number > 15)


console.log(evenNumberGreaterThanFifteen);