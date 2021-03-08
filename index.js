const http = require('http');
const axios = require('axios');

http.createServer((req, res)=>{
  //res.write("Hello world \n"); // write a response
  res.write(users.join("\n"))
  res.end(); //end the response
}).listen(8000); // listen for requests on port 8000

let users = []; // names of users will be stored here
(async function getNames() {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    users = data.map(user => user.name);
  } catch (error) {
    console.log(error);
  }
})();