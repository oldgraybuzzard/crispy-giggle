const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Employer {
    _id: ID
    companyName: String
    email: String
    password: String
    employees: [Employee]
    courses: [Course]
  }
  type Employee {
    _id: ID
    firstName: String
    lastName: String
    email: String
    department: String
    role: String
    employerId: [Employer]
    courses: [Course]
  }
  type Course {
    _id: ID
    courseText: String
    createdAt: String
    employer: [Employer]
    employees: [Employee]
  }
  type Auth {
    token: ID!
    employer: Employer
  }
  type EmployeeAuth {
    token: ID!
    employee: Employee
  }
  type Query {
    employerMe: Employer
    employer(companyName: String!): Employer
    employers: [Employer]
    employeeMe: Employee
    employee(_id: ID!): Employee
    courses: [Course]
    course(_id: ID!): Course
  }
  type Mutation {
    addEmployer(companyName: String!, email: String!, password: String!): Auth
    employerLogin(email: String!, password: String!): Auth
    addEmployee(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      department: String!
      role: String!
    ): Employee
    employeeLogin(email: String!, password: String!): EmployeeAuth
    addCourse(courseText: String!, employees: ID): Course
    updateEmployer(companyName: String, email: String, password: String): Auth
    removeCourse(_id: ID!): Course
    removeEmployee(_id: ID!): Employee
    removeEmployer(_id: ID!): Employer
  }
`;

module.exports = typeDefs;
