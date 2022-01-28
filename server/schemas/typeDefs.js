//git commit//

const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstname: String
    lastname: String
    email: String
    password: String
    role: String
    courses: [Course]
  }

  type Course {
   coursetext: String
   createdat: String
   employer: String
   employees: String
  }
  

  type Query {
    users: [User]
  }
`;

module.exports = typeDefs;