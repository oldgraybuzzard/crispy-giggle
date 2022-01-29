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
    _id: ID
    coursetext: String
    createdat: String
    employer: [Employer]
    employees: [Employee]
  }
  
  type Employer {
    _id: ID
    companyName: String
    email: String
    password: String
    employees: [Employees]
    courses: [Course]
  }

  type Employees {
    _id: ID
    firstName: String
    lastName: String
    email: String
    deptName: String
    role: String
    courses: [Course]
  }

  type Query {
    me: User
    users: [User]
    employee(email: String!): Employee
    employer: [Employer]
  }

  type Mutation {
    addEmployer(companyName: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;