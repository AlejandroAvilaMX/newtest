const http = require('http');
const axios = require('axios');

http.createServer((req, res)=>{
  //res.write("Hello world \n"); // write a response
  //res.write(users.join("\n"))
  res.write(chars.join("\n"))
  res.end(); //end the response
}).listen(8000); // listen for requests on port 8000

//let users = []; // names of users will be stored here
let chars = [];
(async function getNames() {
  try {
    //const { data } = await axios.get(
    //  "https://jsonplaceholder.typicode.com/users"
    //);
    //users = data.map(user => user.name);
    const { data } = await axios.get("https://swapi.dev/api/people");
    chars = data.results.map(char => char.name)
    console.log(chars);
  } catch (error) {
    console.log(error);
  }
})();