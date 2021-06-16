const likePost = (id)=>{
    fetch('http://localhost:5000/app.js')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
}

likePost()