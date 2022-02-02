const db = require('./connection');
const { Course, Employee, Employer, User } = require('../models');
const { findById, findByIdAndUpdate } = require('../models/Employer');

db.once('open', async () => {
  await Employee.deleteMany();
  await Course.deleteMany();
  await Employer.deleteMany();
  
  
  //seeds for Employer  
  const employers = await Employer.insertMany([
    {
      companyName: 'Company A',
      email: 'companya@test.com',
      password: 'test12345',
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
  const employee = await Employee.insertMany([
    {
      firstName: 'John',
      lastName: 'Tester1',
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
      lastName: 'Tester2',
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
      lastName: 'Tester3',
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
      lastName: 'Tester4',
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
      lastName: 'Tester5',
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
  console.log('employees seeded');

  // update courses and employer files seeded earlier

  //employer updated
  await Employer.updateOne({ _id: employers[0]}, {$addToSet: {employees: employee[0]}}); 
  await Employer.updateOne({ _id: employers[0]}, {$addToSet: {courses: trainingCourse[0]}});
  await Employer.updateOne({ _id: employers[1]}, {$addToSet: {employees: employee[1]}}); 
  await Employer.updateOne({ _id: employers[1]}, {$addToSet: {courses: trainingCourse[1]}});
  await Employer.updateOne({ _id: employers[2]}, {$addToSet: {employees: employee[2]}}); 
  await Employer.updateOne({ _id: employers[2]}, {$addToSet: {courses: trainingCourse[2]}});
  await Employer.updateOne({ _id: employers[3]}, {$addToSet: {employees: employee[3]}}); 
  await Employer.updateOne({ _id: employers[3]}, {$addToSet: {courses: trainingCourse[3]}});

      console.log('employer seed updated');

  //courses updated by id
  await Course.updateOne({ _id: trainingCourse[0]}, {$addToSet: {employees: employee[0]}});
  await Course.updateOne({ _id: trainingCourse[1]}, {$addToSet: {employees: employee[1]}});
  await Course.updateOne({ _id: trainingCourse[2]}, {$addToSet: {employees: employee[2]}});
  await Course.updateOne({ _id: trainingCourse[3]}, {$addToSet: {employees: employee[3]}});


  console.log('course seed updated');

  process.exit();
});





  
  
  
