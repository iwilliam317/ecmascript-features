// api.get('/users/1')
//   .then(response => {
//     api.get(`users/address/${response.id}`))
//       .then(responseAddress => {

//       })
//       .catch(error => {

//       })
    
//   })

// .catch(error => {})


const searchAddress = async () => {
  try{
    const user = await api.get('/users/1');
    const address = await api.get(`/users/address/${user.id}`);

  } catch (error) {
    console.log(error);
  }
}