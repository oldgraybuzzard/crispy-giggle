import React from "react";
import { Link } from 'react-router-dom';
import {Grid, Button} from 'semantic-ui-react';
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
    <>
      <h1 className="center-objs">{employerData.companyName}</h1>
      <Grid columns='equal'>
        <Grid.Row>
          <Grid.Column className="center-objs">
            <h2>Employees!</h2>
            <ul>
              {employerData.employees.map((employee) => (
                  <li key={employee._id}>{employee.firstName} {employee.lastName}</li>
                )
              )}
            </ul>
          </Grid.Column>

          <Grid.Column width={9} className="center-objs">
            <h2>Courses!</h2>
            <ul>
              {employerData.courses.map((course) => (
                  <li key={course._id} className="empr-course-list">
                      <h2>{course.courseTitle}</h2>
                      <p>Number of employees: {course.employees.length}</p>
                  </li>
              ))}
            </ul>
          </Grid.Column>

          <Grid.Column>
            <Button className="empr-btns center-objs">Create a Course</Button>
            
            <Button as={Link} to="/add-employee" className="empr-btns center-objs">Add Employee</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default EmployerDashboard;