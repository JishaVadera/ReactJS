fetch('http://localhost:3000/comments')
.then(response => response.json())
.then(data => console.log(data))