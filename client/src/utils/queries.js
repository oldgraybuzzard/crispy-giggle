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

export const QUERY_COURSES = gql`
  {
    courses {
      curseTitle
      courseText
      employer {
        _id
        companyName
        courses
      }
      employees {
        _id
        firstName
        lastname
        email
        department
        role
      }
    }
  }
`;

export const EMPLOYER_ME = gql`
  {
    employerMe {
      _id
      companyName
      email
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
            createdAt
            }
        }
        courses {
            _id
            courseTitle
            courseText
            createdAt
            employees {
                firstName
                lastName
            }
        }
        }
    }
`;

export const EMPLOYEE_ME = gql`

{
  employeeMe {
    _id
    firstName
    lastName
    email
    department
    role
    employerId {
      _id
      companyName
    }
    courses {
      _id
      courseText
      createdAt
    }
  }
}
`;

export const COURSES = gql`
    query Courses {
        courses {
            _id
            courseText
            createdAt
            courseTitle
            employer {
                _id
                companyName
            }
            employees {
                _id
                firstName
                lastName
            }
        }
    }
`;