import { gql } from '@apollo/client';

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
      courseTitle
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