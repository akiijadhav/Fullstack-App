const express = require('express'); // require express module to use it
const graphqlHTTP = require('express-graphql'); // require express-graphql module for express to interact with graphql
const schema = require('./schema/schema'); // require schema file to use in middleware
const mongoose = require('mongoose'); // require mongoose to connect to mlab i.e. instance of mongodb online
const cors = require('cors'); //allow query(front end which is on another server port 3000) send request to gql server on port 4000

const server = express(); // initialize it so we can use methods

//allow cross-origin request i.e let client send request to server
server.use(cors());

//connect to mmlab database
//replace the db sting & pw with my own
mongoose.connect('mongodb://testuser:test123@ds125392.mlab.com:25392/gqlakii', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('connected to database');
})

//graphical representation of data and how it can be walked
server.use('/graphql', graphqlHTTP({ //graphql middleware uses the supercharge endpoint route to communicate with express-graphql
  schema,
  graphiql: true
}));

const port = process.env.PORT || 9000;
server.listen(port, () => console.log(`Listening on port ${port}`))