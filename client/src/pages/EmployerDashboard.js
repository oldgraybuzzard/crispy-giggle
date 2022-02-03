import React from "react";
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { useQuery } from "@apollo/client";
import { EMPLOYER_ME } from "../utils/queries";

const EmployerDashboard = (props) => {
  const { loading, data } = useQuery(EMPLOYER_ME);
  
  if (loading) {
    return (
      <h2>Loading...</h2>
    );
  }

  const employerData = data?.employerMe || [];
  
  return (
    <div className="center-content">
      <h2 className="center-objs">{employerData.companyName}</h2>
      <div className="container">
        <section className="emp-list-container center-objs">
          <h2>Employees!</h2>
          <ul className="emp-container">
            {employerData.employees.map((employee) => (
              // add css to margin: 1rem 0rem for li tags
                <li key={employee._id}>
                  <p>Employee ID: {employee._id}</p> 
                  <p>Employee Name: {employee.firstName} {employee.lastName}</p>
                </li>
              )
            )}
          </ul>
        </section>

        <section className="center-objs">
          <h2>Courses!</h2>
          <ul>
            {employerData.courses.map((course) => (
                <li key={course._id} className="empr-course-list">
                    <h3>{course.courseTitle}</h3>
                    <p>Number of employees: {course.employees.length}</p>
                </li>
            ))}
          </ul>
        </section>

        <section className="center-objs">
          <Button as={Link} to="/add-course" className="empr-btns center-objs">Create a Course</Button>
          <Button as={Link} to="/add-employee" className="empr-btns center-objs">Add Employee</Button>
        </section>
      </div>
    </div>
  )
}

export default EmployerDashboard;