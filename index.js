const http = require('http'),
axios = require('axios'),
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose');

var app = express();
var port = 8000;

app.use(bodyParser.json());
app.use(logger('tiny'));
app.use(require('./routes'));

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
//let chars = [];
//(async function getNames() {
//  try {
//    //const { data } = await axios.get(
//    //  "https://jsonplaceholder.typicode.com/users"
//    //);
//    //users = data.map(user => user.name);
//    const { data } = await axios.get("https://swapi.dev/api/people");
//    chars = data.results.map(char => char.name)
//    console.log(chars);
//  } catch (error) {
//    console.log(error);
//  }
//})();

//mongoose.connect('mongodb://localhost/test');

//mongoose.connection.on('error', (err) => { 
//    console.log('Mongodb Error: ', err); 
//    process.exit();
//});
//mongoose.connection.on('connected', () => { 
//    console.log('MongoDB is successfully connected');
//});

//app.listen(port, function(err){
//    console.log('Listening on port: ' + port);
//});

app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});

const dbURI = "mongodb://localhost/test";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));