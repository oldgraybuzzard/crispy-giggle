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
    employerId: [Employer]
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
    employers: [Employer]
    employeeMe: Employee
  }

  type Mutation {
    addEmployer(companyName: String!, email: String!, password: String!): Auth
    employerLogin(email: String!, password: String!): Auth
    addEmployee(firstName: String!, lastName: String!, email: String!, password: String!, department: String!, role: String!): Employee
    employeeLogin(email: String!, password: String!): EmployeeAuth
    addCourse(courseText: String!, employees: ID): Course
  }
`;

module.exports = typeDefs;




// mutations
// =====================================================================
// addCourse(input: CourseData): Employer

// use context for employer creating employee to store the employer id into the 
// employee Model. 
// Reference Deep Thoughts on creating Thoughts and Reactions