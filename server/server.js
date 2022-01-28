const express = require('express');
const mongoose = require('mongoose');
const{ApolloServer} = require('apollo-server-express');
const {typeDefs, resolvers} = require("./schemas");

const db = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;
const startServer = async () => {


  const server = new ApolloServer ({
    typeDefs, resolvers
  });
  //start for Apollo Server//
  await server.start();

  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);

}

startServer()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.once("open", ()=>{

  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
});
