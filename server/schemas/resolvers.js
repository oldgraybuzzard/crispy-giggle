const { Employer, Employee, Course } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { populate } = require('../models/Employer');

const resolvers = {
  Query: {
    // get logged in employer user
    employerMe: async (parents, args, context) => {
      if (context.employer) {
        const employerUserData = await Employer.findOne({
          _id: context.employer._id,
        })
          .select('-__v -password')
          .populate({
            path: 'employees',
            populate: {
              path: 'employerId',
<<<<<<< HEAD
              model: 'Employer'
            },
            populate: {
              path: 'courses',
              model: 'Course'
            }
=======
              model: 'Employer',
            },
            populate: {
              path: 'courses',
              model: 'Course',
            },
>>>>>>> feature/forms-backend-connection
          })
          .populate({
            path: 'courses',
            populate: {
              path: 'employer',
<<<<<<< HEAD
              model: 'Employer'
            },
            populate: {
              path: 'employees',
              model: 'Employee'
            }
=======
              model: 'Employer',
            },
            populate: {
              path: 'employees',
              model: 'Employee',
            },
>>>>>>> feature/forms-backend-connection
          });

        return employerUserData;
      }

      throw new AuthenticationError('Not logged in');
    },
    // get employer by companyName
<<<<<<< HEAD
    employer: async(parents, { companyName }) => {
=======
    employer: async (parents, { companyName }) => {
>>>>>>> feature/forms-backend-connection
      return await Employer.findOne({ companyName: companyName })
        .select('-__v -password')
        .populate({
          path: 'employees',
          populate: {
            path: 'employerId',
<<<<<<< HEAD
            model: 'Employer'
          },
          populate: {
            path: 'courses',
            model: 'Course'
          }
=======
            model: 'Employer',
          },
          populate: {
            path: 'courses',
            model: 'Course',
          },
>>>>>>> feature/forms-backend-connection
        })
        .populate({
          path: 'courses',
          populate: {
            path: 'employer',
<<<<<<< HEAD
            model: 'Employer'
          },
          populate: {
            path: 'employees',
            model: 'Employee'
          }
=======
            model: 'Employer',
          },
          populate: {
            path: 'employees',
            model: 'Employee',
          },
>>>>>>> feature/forms-backend-connection
        });
    },
    // get all employer
    employers: async () => {
      return await Employer.find()
        .select('-__v')
        .populate({
          path: 'employees',
          populate: {
            path: 'employerId',
<<<<<<< HEAD
            model: 'Employer'
          },
          populate: {
            path: 'courses',
            model: 'Course'
          }
=======
            model: 'Employer',
          },
          populate: {
            path: 'courses',
            model: 'Course',
          },
>>>>>>> feature/forms-backend-connection
        })
        .populate({
          path: 'courses',
          populate: {
            path: 'employer',
<<<<<<< HEAD
            model: 'Employer'
          },
          populate: {
            path: 'employees',
            model: 'Employee'
          }
=======
            model: 'Employer',
          },
          populate: {
            path: 'employees',
            model: 'Employee',
          },
>>>>>>> feature/forms-backend-connection
        });
    },

    // get logged in employee
    employeeMe: async (parents, args, context) => {
<<<<<<< HEAD
      // This is actually after the employee login. 
      // Employer in this case is representing employee
      if (context.employer) {
        const employeeUserData = await Employee.findOne({ _id: context.employer._id })
=======
      // This is actually after the employee login.
      // Employer in this case is representing employee
      if (context.employer) {
        const employeeUserData = await Employee.findOne({
          _id: context.employer._id,
        })
>>>>>>> feature/forms-backend-connection
          .select('-__v -password')
          .populate('employerId')
          .populate('courses');

        return employeeUserData;
      }

      throw new AuthenticationError('Not logged in');
    },
    // get an employee by their _id if the employer is logged in.
    employee: async (parents, { _id }, context) => {
      if (context.employer) {
        return Employee.findOne({ _id: _id, employerId: context.employer._id })
          .populate('employerId')
          .populate('courses');
      }

      throw new AuthenticationError('You must be logged in!');
    },

    // get all courses
    courses: async () => {
      return Course.find()
        .select('-__v')
        .populate('employer')
        .populate('employees');
    },
    // get course by _id
    course: async (parents, { _id }) => {
      return Course.findOne({ _id: _id })
        .populate('employer')
        .populate('employees');
<<<<<<< HEAD
    }
=======
    },
>>>>>>> feature/forms-backend-connection
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
    addEmployee: async (parent, args, context) => {
      if (context.employer) {
        const employee = await Employee.create({
          ...args,
          employerId: context.employer._id,
        });

        await Employer.findByIdAndUpdate(
          { _id: context.employer._id },
<<<<<<< HEAD
          { $push: { employees: employee._id }},
=======
          { $push: { employees: employee._id } },
>>>>>>> feature/forms-backend-connection
          { new: true, runValidators: true }
        )
          .populate('employees')
          .populate('courses');

        return employee;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    // employee login
    employeeLogin: async (parent, { email, password }) => {
<<<<<<< HEAD
      const employee = await Employee.findOne({ email }).populate('employerId').populate('courses');
=======
      const employee = await Employee.findOne({ email })
        .populate('employerId')
        .populate('courses');
>>>>>>> feature/forms-backend-connection

      if (!employee) {
        console.log('The employee is ' + employee);
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
<<<<<<< HEAD
        const course = await Course.create({ ...args, employer: context.employer._id });
=======
        const course = await Course.create({
          ...args,
          employer: context.employer._id,
        });
>>>>>>> feature/forms-backend-connection

        // update employer with new course
        await Employer.findByIdAndUpdate(
          { _id: context.employer._id },
<<<<<<< HEAD
          { $push: { courses: course._id }},
=======
          { $push: { courses: course._id } },
>>>>>>> feature/forms-backend-connection
          { new: true, runValidators: true }
        );
        // update employee with new course
        if (args.employees) {
          await Employee.findByIdAndUpdate(
            { _id: args.employees },
<<<<<<< HEAD
            { $push: { courses: course._id }},
=======
            { $push: { courses: course._id } },
>>>>>>> feature/forms-backend-connection
            { new: true, runValidators: true }
          );
        }

        return course;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    // remove course
<<<<<<< HEAD
    removeCourse: async (parent, { _id } , context) => {
=======
    removeCourse: async (parent, { _id }, context) => {
>>>>>>> feature/forms-backend-connection
      if (context.employer) {
        const removedCourse = await Course.findByIdAndDelete({ _id: _id });

        await Employer.findByIdAndUpdate(
          { _id: context.employer._id },
<<<<<<< HEAD
          { $pull: { courses: _id }},
          { new: true }
        );
      
=======
          { $pull: { courses: _id } },
          { new: true }
        );

>>>>>>> feature/forms-backend-connection
        return removedCourse;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    // remove employee
    removeEmployee: async (parent, { _id }, context) => {
      if (context.employer) {
        const removedEmployee = await Employee.findByIdAndDelete({ _id: _id });

        await Employer.findByIdAndUpdate(
          { _id: context.employer._id },
<<<<<<< HEAD
          { $pull: { courses: _id }},
          { new: true }
        );
      
=======
          { $pull: { courses: _id } },
          { new: true }
        );

>>>>>>> feature/forms-backend-connection
        return removedEmployee;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    // remove employer
    removeEmployer: async (parent, { _id }, context) => {
      if (context.employer._id === _id) {
        const removedEmployer = await Employer.findByIdAndDelete({ _id: _id });

        return removedEmployer;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    // updateEmployer for the possibility of it being the companyName, email, or password
<<<<<<< HEAD
    updateEmployer: async (parents, {companyName, email, password}, context) => {
      if (context.employer) {

        const employer = await Employer.findByIdAndUpdate( 
          context.employer._id, 
          { companyName: companyName, email: email, password: password },
          { new: true, runValidators: true }
        ).populate({
          path: 'employees',
          populate: {
            path: 'employerId',
            model: 'Employer'
          },
          populate: {
            path: 'courses',
            model: 'Course'
          }
        })
        .populate({
          path: 'courses',
          populate: {
            path: 'employer',
            model: 'Employer'
          },
          populate: {
            path: 'employees',
            model: 'Employee'
          }
        });
=======
    updateEmployer: async (
      parents,
      { companyName, email, password },
      context
    ) => {
      if (context.employer) {
        const employer = await Employer.findByIdAndUpdate(
          context.employer._id,
          { companyName: companyName, email: email, password: password },
          { new: true, runValidators: true }
        )
          .populate({
            path: 'employees',
            populate: {
              path: 'employerId',
              model: 'Employer',
            },
            populate: {
              path: 'courses',
              model: 'Course',
            },
          })
          .populate({
            path: 'courses',
            populate: {
              path: 'employer',
              model: 'Employer',
            },
            populate: {
              path: 'employees',
              model: 'Employee',
            },
          });
>>>>>>> feature/forms-backend-connection

        const token = signToken(employer);

        return { token, employer };
      }

      throw new AuthenticationError('Need to be logged in!');
    },
    // updateEmployee for the possibility of it being the
    // firstName, lastName, email, department, role, or password
<<<<<<< HEAD
    updateEmployee: async (parents,{firstName, lastName, email, department, role, password}, context) => {
      if (context.employer) {
        const employee = await Employee.findOneAndUpdate( 
          email, 
          {firstName: firstName, lastName: lastName, email: email, department: department, role: role, password: password},
=======
    updateEmployee: async (
      parents,
      { firstName, lastName, email, department, role, password },
      context
    ) => {
      if (context.employer) {
        const employee = await Employee.findOneAndUpdate(
          email,
          {
            firstName: firstName,
            lastName: lastName,
            email: email,
            department: department,
            role: role,
            password: password,
          },
>>>>>>> feature/forms-backend-connection
          { new: true, runValidators: true }
        )
          .populate('employerId')
          .populate({
            path: 'courses',
            populate: {
              path: 'employes',
<<<<<<< HEAD
              model: 'Employee'
            }
=======
              model: 'Employee',
            },
>>>>>>> feature/forms-backend-connection
          });

        return employee;
      }

      throw new AuthenticationError('Need to be logged in!');
    },
    // updateCourse for the possibility of needing to update
    // courseText or the employees array.
<<<<<<< HEAD
    updateCourse: async (parents, {_id, courseText, employees}, context) => {
      if (context.employer) {
        const course = await Course.findByIdAndUpdate(
          _id,
          {courseText: courseText, $addToSet: {employees: employees}},
          { new: true }
        ).populate('employer').populate('employees');
=======
    updateCourse: async (parents, { _id, courseText, employees }, context) => {
      if (context.employer) {
        const course = await Course.findByIdAndUpdate(
          _id,
          { courseText: courseText, $addToSet: { employees: employees } },
          { new: true }
        )
          .populate('employer')
          .populate('employees');
>>>>>>> feature/forms-backend-connection

        return course;
      }

      throw new AuthenticationError('Need to be logged in!');
<<<<<<< HEAD
    }
  }
=======
    },
  },
>>>>>>> feature/forms-backend-connection
};

module.exports = resolvers;
