const user = {
  name: 'william',
  email: 'willshinji@gmail.com',
  hobbies: {
    videogame: 'playstation 4',
    sports: 'workout'
  }
}

const { name, email, hobbies: { videogame, sport}} = User
console.log(name, email, videogame, sport);


function print({name, email}){
  console.log(name, email);
}

print(User);
