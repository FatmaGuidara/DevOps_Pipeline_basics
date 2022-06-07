const express = require('express')
const app = express()
const path = require('path');
const bodyParser = require('body-parser');  //body parser is middleware so required
const assert = require('assert');           //for throwing the err

const port = 3000


//Setting up the mongo db
const MongoClient = require('mongodb').MongoClient;
//for the object id of the mongodb for sql people its pk kinda
const ObjectID = require('mongodb').ObjectID;
// Connection URL
const url = 'mongodb://localhost:27017/todoapp';    //default url 27017
// Database Name
const dbName = 'todos';



//Body Parser Middlewware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));  //default setups

//Connect to the mongodb
MongoClient.connect(url , (err, client) => {
  
  assert.equal(null, err);    //if the assertis null it will throw an error
  console.log("MONGODB connected");

  const db = client.db(dbName);
  Todos = db.collection('todos');

  //Always listening on this port number keeping it inside since we dont have to connect again n again
  app.listen(port, () => {
      console.log("Sever running on port: " + port);
  });


});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// hello world Function
const helloworld = () => {
    return 'hello world';
}


// GET all todos
app.get('/todos', (req, res, next) => {
  Todos.find({}).toArray((err, todos) => {
      assert.equal(err, null);    //if the assertis null it will throw an error
      res.send(todos);                
  })
});

// INSERT a todo
app.post('/todo/add',  (req,res) => {
  const todo ={
      text: req.body.text,
      body: req.body.body,
  }
  //now insert the data
  Todos.insert(todo, (err, result) => {
      assert.equal(err, null);
      res.send({todo});
  });
})





/* To DELETE THE TODO */
app.delete('/todo/delete/:id', (req,res) => {
  const query = {_id :   ObjectID(req.params.id) }; 
  Todos.deleteOne(query, (err,response) => {
      assert.equal(err, null);
      res.send(204);
  });
});

module.exports = {helloworld}

