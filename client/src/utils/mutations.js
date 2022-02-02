import { gql } from '@apollo/client';

<<<<<<< HEAD
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
=======
export const EMPLOYER_LOGIN = gql`
  mutation EmployerLogin($email: String!, $password: String!) {
    employerLogin(email: $email, password: $password) {
      token
      employer {
>>>>>>> 02d62d02c2f71ef734cf725ed121a945617f60ec
        _id
      }
    }
  }
`;

<<<<<<< HEAD
export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
=======
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
>>>>>>> 02d62d02c2f71ef734cf725ed121a945617f60ec
      }
    }
  }
`;

<<<<<<< HEAD
export const ADD_USER = gql`
  mutation addUser(
=======
export const ADD_EMPLOYEE = gql`
  mutation AddEmployee(
>>>>>>> 02d62d02c2f71ef734cf725ed121a945617f60ec
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
<<<<<<< HEAD
  ) {
    addUser(
=======
    $department: String!
    $role: String!
  ) {
    addEmployee(
>>>>>>> 02d62d02c2f71ef734cf725ed121a945617f60ec
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
<<<<<<< HEAD
    ) {
      token
      user {
=======
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
>>>>>>> 02d62d02c2f71ef734cf725ed121a945617f60ec
        _id
      }
    }
  }
`;
<<<<<<< HEAD

export const ADD_EMPLOYEE = gql`
  mutation addEmployee(
    $firstName: String!
    $lastName: String!
    $email: String!
  )
`;
=======
>>>>>>> 02d62d02c2f71ef734cf725ed121a945617f60ec
