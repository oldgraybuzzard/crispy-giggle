const db = require('./connection');
const { Course, Employee, Employer, User } = require('../models');

db.once('open', async () => {
  //seeds for Employer
  await Employer.deleteMany();

  const employers = await Employer.insertMany([
    {
      companyName: 'Company A',
      email: 'companya@test.com',
      password: 'test12345'
    },
    {
      companyName: 'Company B',
      email: 'companyb@test.com',
      password: 'test12345'
    },
    {
      companyName: 'Company C',
      email: 'companyc@test.com',
      password: 'test12345'
    },
    {
      companyName: 'Company D',
      email: 'companyd@test.com',
      password: 'test12345'
    },
  ]);
  console.log('employers seeded');
  
  //seeds for Course
  await Course.deleteMany();

  const trainingCourse = await Course.insertMany([
    { 
      courseTitle: 'Course A',
      courseText: 'Dolor consectetur esse duis esse culpa occaecat proident aliqua commodo fugiat amet laboris reprehenderit nostrud.',
      employer: employers[0]._id
    },
    { 
      courseTitle: 'Course B',
      courseText: 'Dolor consectetur esse duis esse culpa occaecat proident aliqua commodo fugiat amet laboris reprehenderit nostrud.',
      employer: employers[1]._id
    },
    { 
      courseTitle: 'Course C',
      courseText: 'Dolor consectetur esse duis esse culpa occaecat proident aliqua commodo fugiat amet laboris reprehenderit nostrud.',
      employer: employers[2]._id
    },
    { 
      courseTitle: 'Course D',
      courseText: 'Dolor consectetur esse duis esse culpa occaecat proident aliqua commodo fugiat amet laboris reprehenderit nostrud.',
      employer: employers[3]._id
    }
  ]);

  console.log('courses seeded');

  //seeds for Employee
  await Employee.deleteMany();

  const employee = await Employee.insertMany([
    {
      firstName: 'John',
      lastName: 'Tester',
      email: 'johndtester@compa.com',
      password: 'test12345',
      department: 'Operations',
      role: 'Tester',
      employerId: employers[0]._id,
      courses: [
        trainingCourse[0]._id, 
        trainingCourse[1]._id
      ]
    },
    {
      firstName: 'James',
      lastName: 'Tester',
      email: 'jamesdtester@compb.com',
      password: 'test12345',
      department: 'Production',
      role: 'Tester',
      employerId: employers[1]._id,
      courses: [
        trainingCourse[2]._id, 
        trainingCourse[3]._id
      ]
    },
    {
      firstName: 'Luther',
      lastName: 'Tester',
      email: 'lutherdtester@compc.com',
      password: 'test12345',
      department: 'Manufacturing',
      role: 'Tester',
      employerId: employers[2]._id,
      courses: [
        trainingCourse[0]._id, 
        trainingCourse[3]._id
      ]
    },
    {
      firstName: 'Jane',
      lastName: 'Tester',
      email: 'janedtester@compd.com',
      password: 'test12345',
      department: 'Engineering',
      role: 'Tester',
      employerId: employers[3]._id,
      courses: [
        trainingCourse[0]._id, 
        trainingCourse[1]._id
      ]
    },
    {
      firstName: 'July',
      lastName: 'Tester',
      email: 'julydtester@compa.com',
      password: 'test12345',
      department: 'Engineering',
      role: 'Tester',
      employerId: employers[3]._id,
      courses: [
        trainingCourse[2]._id, 
        trainingCourse[1]._id
      ]
    }
  ]);
});





  
  
  
