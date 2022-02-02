import { gql } from "@apollo/client";

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