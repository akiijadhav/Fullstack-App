const express = require('express'); // require express module to use it
const graphqlHTTP = require('express-graphql'); // require express-graphql module for express to interact with graphql
const schema = require('./schema/schema'); // require schema file to use in middleware
const mongoose = require('mongoose'); // require mongoose to connect to mlab i.e. instance of mongodb online
const cors = require('cors'); //allow query(front end which is on another server port 3000) send request to gql server on port 4000

const app = express(); // initialize it so we can use methods

//allow cross-origin request i.e let client send request to server
app.use(cors());

//connect to mmlab database
//replace the db sting & pw with my own
mongoose.connect('mongodb://testuser:test123@ds125392.mlab.com:25392/gqlakii', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('connected to database');
})

//graphical representation of data and how it can be walked
app.use('/graphql', graphqlHTTP({ //graphql middleware uses the supercharge endpoint route to communicate with express-graphql
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('You are listening to port 4000');
})
