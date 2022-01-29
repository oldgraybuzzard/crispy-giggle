const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const { authMiddleware } = require('./utils/auth');

const app = express();
const PORT = process.env.PORT || 3001;

const startServer = async () => {
  const server = new ApolloServer ({
    typeDefs, 
    resolvers,
    context: authMiddleware
  });
  //start for Apollo Server//
  await server.start();

  // This is needed to start up the up to date version Apollo's GraphQL 
  // Always needs to come after the `await server.start();`
  server.applyMiddleware({ app });

  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};


startServer();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

db.once("open", ()=>{
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}!`);
  });
});
