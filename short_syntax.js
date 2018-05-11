const User = {
  name: 'william',
  email: 'willshinji@gmail.com',
  hobbies: {
    videogame: 'playstation 4',
    sport: 'workout'
  }
}

const {name, email} = User;

const Person = {
  name, email
};

console.log(Person);


//instead of this
// var Person = {
//   name: name,
//   email: email
// }