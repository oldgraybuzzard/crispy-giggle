//git commit//

const { gql } = require('apollo-server-express');

const typeDefs = gql`
  input EmployeeData {
    firstName: String
    lastName: String
    email: String
    password: String
    department: String
    role: String
  }

  input CourseData {
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
    employees: [Employee]
    courses: [Course]
  }

  type Employee {
    _id: ID
    firstName: String
    lastName: String
    email: String
    deptName: String
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

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    employerMe: Employer
    employers: [Employer]
  }

  type Mutation {
    addEmployer(companyName: String!, email: String!, password: String!): Auth
    employerLogin(email: String!, password: String!): Auth
  }

`;

module.exports = typeDefs;

// mutations
// =====================================================================
// addEmployee(input: EmployeeData): Employer
// employeeLogin(email: String!, password: String!): Auth
// addCourse(input: CourseData): Employer