const { User, Employee, Employer, Course } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // get logged in user
    me: async (parents, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    // get all users
    users: async () => {
      return User.find()
        .select('-__v -password');
    },
    // get single employee
    employee: async (parent, { email }) => {
      return Employee.findOne({ email })
        .select('-__v -password')
    },
    // get all employer
    employer: async () => {
      return Employer.find()
        .select('-__v -password')
    },
    // get all courses
    courses: async () => {
      return Course.find()
        .select('-__v');
    }
  },
  Mutation: {
    // create a employer
    addEmployer: async (parent, args) => {
      const employer = await Employer.create(args);
      const token = signToken(employer);

      return { token, employer };
    }
  }
};

module.exports = resolvers;
