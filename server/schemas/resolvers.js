const { Employer, Employee, Course } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // get logged in employer user
    employerMe: async (parents, args, context) => {
      if (context.employer) {
        const employerUserData = await Employer.findOne({ _id: context.employer._id })
          .select('-__v -password')
          .populate('employees')
          .populate('courses');

        return employerUserData;
      }

      throw new AuthenticationError('Not logged in');
    },
    // get all employer
    employers: async () => {
      return Employer.find()
        .select('-__v')
        .populate('employees')
        .populate('courses');
    },
    // get logged in employee
    employeeMe: async (parents, args, context) => {
      if (context.employer) {
        const employeeUserData = await Employee.findOne({ _id: context.employer._id })
          .select('-__v -password')
          .populate('employerId')
          .populate('courses');

          return employeeUserData;
      }

      throw new AuthenticationError('Not logged in');
    },
    // get all courses
    courses: async () => {
      return Course.find()
        .select('-__v')
        .populate('employer')
        .populate('employees');
    }
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
    addEmployee: async (parent, args, context ) => {
      if (context.employer) {
        const employee = await Employee.create({ ...args , employerId: context.employer._id });

        await Employer.findByIdAndUpdate(
          { _id: context.employer._id },
          { $push: { employees: employee._id }},
          { new: true, runValidators: true }
        )
          .populate('employerId')
          .populate('courses');

        return employee;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    // employee login
    employeeLogin: async (parent, { email, password }) => {
      const employee = await Employee.findOne({ email });

      if (!employee) {
        console.log("The employee is " + employee);
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await employee.isCorrectPassword(password);

      if (!correctPw) {
        console.log(correctPw);
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(employee);

      return { token, employee };
    },
    // add course by employer
    addCourse: async (parent, args, context) => {
      if (context.employer) {
        const course = await Course.create({ ...args, employer: context.employer._id });

        // update employer with new course
        await Employer.findByIdAndUpdate(
          { _id: context.employer._id },
          { $push: { courses: course._id }},
          { new: true, runValidators: true }
        )
          .populate('employees')
          .populate('courses');
        // update employee with new course
        if (args.employee) {
          await Employee.findByIdAndUpdate(
            { _id: args.employees },
            { $push: { courses: course._id }},
            { new: true, runValidators: true }
          )
            .populate('employerId')
            .populate('courses');
        }
        

        return course;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    // remove course
    removeCourse: async (parents, { _id } , context) => {
      if (context.employer) {
        const removedCourse = await Course.findByIdAndDelete({ _id });

        await Employer.findByIdAndUpdate(
          { _id: context.employer._id },
          { $pop: { courses: removedCourse._id }},
          { new: true }
        );
      
        return removedCourse;
      }

      throw new AuthenticationError('You need to be logged in!');
    }
    // remove employee   removeEmployee(_id: ID!): Employee
    // remove employer removeEmployer(_id: ID!): Employer
  }
};

module.exports = resolvers;
