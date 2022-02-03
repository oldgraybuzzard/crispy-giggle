import React from 'react';
import { Link } from 'react-router-dom';
import {  Grid, Button  } from 'semantic-ui-react';
import { useQuery } from '@apollo/client';
import { EMPLOYEE_ME, QUERY_EMPLOYEES } from '../utils/queries';
import './EmployeeDashboard.css';

const EmployeeDashBoard = (props) => {
 
  const { loading, data } = useQuery(EMPLOYEE_ME);
 
  if (loading) {
    return (
      <h2>Loading...</h2>
    );
  }
  
  const myEmployeeData = data?.employeeMe|| [];
   
  return(
    <div className='container'>
      <h2 className='text-center'>{myEmployeeData.firstName} {myEmployeeData.lastName}'s Training Record</h2>
      
      <h3>{myEmployeeData.firstName}'s' Courses</h3>
      <Grid divided='vertically'>
        {myEmployeeData.courses.map((course) => (
          <Grid.Row columns={3}>
            {<Grid.Column className='center-objs' key={course._id}>{course.courseTitle}</Grid.Column>}
            {<Grid.Column className='center-objs' key={course._id}>{course.courseText}</Grid.Column>}
            {<Grid.Column className='center-objs' key={course._id}>{course.createdAt}</Grid.Column>}
          </Grid.Row>
        )
        )}
      
      </Grid>
    </div>
    );
  }

    

export default EmployeeDashBoard;
