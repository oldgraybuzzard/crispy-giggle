const { Employer } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // get logged in employer user
    employerMe: async (parents, args, context) => {
      if (context.employer) {
        const employerUserData = await Employer.findOne({ _id: context.employer._id })
          .select('-__v -password');

        return employerUserData;
      }

      throw new AuthenticationError('Not logged in');
    },
    // get all employer
    employers: async () => {
      return Employer.find()
        .select('-__v')
    },
    // get logged in employee
    employeeMe: async (parents, args, context) => {
      if (context.employee) {
        const employeeUserData = await Employee.findOne({ _id: context.employee._id })
          .select('-__v -password');

          return employeeUserData;
      }

      throw new AuthenticationError('Not logged in');
    },
  },
  Mutation: {
    // create a employer
    addEmployer: async (parent, args) => {
      const employer = await Employer.create(args);
      const token = signToken(employer);

      return { token, employer };
    },
    // login for employer
    employerLogin: async (parent, { email, password }) => {
      const employer = await Employer.findOne({ email });

      if (!employer) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await employer.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(employer);

      return { token, employer };
    },
    // employer creates employee
    addEmployee: async (parent, { input }, context ) => {
      if (context.employer) {
        const updatedEmployer = await Employer.findByIdAndUpdate(
          { _id: context.employer._id },
          { $addToSet: { employees: input }},
          { new: true, runValidators: true }
        );

        return updatedEmployer;
      }

      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;
