// OLD SCHOOL WAY
// function myFunction(message){
//   return message
// }

//ARROW FUNCTION

// with one parameter, () is not necessary. 
const myFunction = message => message;
myFunction('hello world');

//return with more than one line, use ()
const myOtherFunction = () => (
  <div class="container">
    <h1>hello world</h1>
  </div>
);

//return object
const myAnotherFunction = () => ( {name: 'william', gender: 'male'})

