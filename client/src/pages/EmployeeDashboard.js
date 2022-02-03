import React from 'react';
import {  Grid, Icon, Label, Menu, Table, Button  } from 'semantic-ui-react';

import { useQuery, useMutation } from '@apollo/client';
import { EMPLOYER_ME, QUERY_COURSES, QUERY_EMPLOYEES, QUERY_EMPLOYERS, QUERY_ME } from '../utils/queries';
import spinner from '../assets/img/spinner.gif';
import './EmployeeDashboard.css';

const EmployeeDashBoard = (props) => {
  const { loading, data } = useQuery(QUERY_EMPLOYEES, QUERY_COURSES, QUERY_ME, QUERY_EMPLOYERS, EMPLOYER_ME);

  if (loading) {
    return (
      <h2>Loading...</h2>
    )
  }
  
  const myEmployeeData = data?.QUERY_ME || [];
  const myCourses = data?.QUERY_COURSES || [];
 
  return(
    <div className='container'>
      <h2 className='text-center'>{myEmployeeData.firstName} {myEmployeeData.lastName}'s Training Record</h2>
      <Grid columns='equal'>
        <Grid.Row>
          <Grid.Column className='center-objs'>
            <h2>My Record</h2>
            <ul>
              {myCourses.courses.map((course) => (
                <li key={course._id}>{course.courseTitle}</li>
              )
             )}
           </ul>
          </Grid.Column>

        </Grid.Row>


      </Grid>
    
    
    </div>
    );
  }

    

export default EmployeeDashBoard;
