import { gql } from '@apollo/client';

export const QUERY_EMPLOYERS = gql`
  {
    employers {
      _id
      companyName
      courses
      employees {
        _id
        firstName
        lastName
        email
        department
        role
        courses {
          _id
          courseText
        }
      }
    }
  `;

export const QUERY_EMPLOYEES = gql`
  {
    employees {
      _id
      firstName
      lastname
      email
      department
      role
      courses {
        _id
        courseText
      }
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      email
      courses {
        _id
        courseText
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($employers: [ID]!) {
    checkout(employers: $employers) {
      session
    }
  }
`;