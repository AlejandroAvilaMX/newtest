const http = require('http'), 
axios = require('axios'),
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser');

var app = express();
var port = 8000;

app.use(bodyParser.json())
app.use(logger('tiny'));
app.use(require('./route'));

//app.get('/hello/:foo/:bar', (req, res) => {
//    //res.send('Hello World!');
//    res.json({message: 'Hello World!', data: [
//        req.params.foo,
//        req.params.bar
//    ]});
//});

//app.post('/hello', (req, res) => {
//    res.json({result: 'Post was sent', data: req.body});
//});

//http.createServer((req, res)=>{
//  //res.write("Hello world \n"); // write a response
//  //res.write(users.join("\n"))
//  res.write(chars.join("\n"))
//  res.end(); //end the response
//}).listen(8000); // listen for requests on port 8000

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

app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});