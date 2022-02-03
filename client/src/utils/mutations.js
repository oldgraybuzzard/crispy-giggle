import { gql } from '@apollo/client';

export const EMPLOYER_LOGIN = gql`
  mutation EmployerLogin($email: String!, $password: String!) {
    employerLogin(email: $email, password: $password) {
      token
      employer {
        _id
      }
    }
  }
`;

export const EMPLOYEE_LOGIN = gql`
  mutation EmployeeLogin($email: String!, $password: String!) {
    employeeLogin(email: $email, password: $password) {
      token
      employee {
        _id
      }
    }
  }
`;

export const ADD_EMPLOYER = gql`
  mutation AddEmployer($companyName: String!, $email: String!, $password: String!) {
    addEmployer(companyName: $companyName, email: $email, password: $password) {
      token
      employer {
        _id
        companyName
      }
    }
  }
`;

export const ADD_EMPLOYEE = gql`
  mutation addEmployee(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $department: String!
    $role: String!
  ) {
    addEmployee(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      department: $department
      role: $role
    ) {
      _id
      firstName
      lastName
      email
      department
      role
      employerId {
        _id
      }
    }
  }
`;

export const ADD_COURSE = gql`
  mutation addCourse(
    $courseTitle: String!
    $courseText: String!
  ) {
  addCOurse(
    courseTitle: $courseTitle
    courseText: $courseText
  ) }
`;