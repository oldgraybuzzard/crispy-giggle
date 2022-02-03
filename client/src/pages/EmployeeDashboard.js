import React from 'react';
import {  Grid, Button  } from 'semantic-ui-react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { EMPLOYEE_ME } from '../utils/queries';
import './EmployeeDashboard.css';
import Auth from '../utils/auth';

const EmployeeDashBoard = (props) => {
  const { id: userParams } = useParams();

  const { loading, data } = useQuery(EMPLOYEE_ME, {
    variables: { email: userParams }
  });
  console.log(EMPLOYEE_ME.email)

  if (loading) {
    return (
      <h2>Loading...</h2>
    )
  }
  
  const myEmployeeData = data?.EMPLOYEE_ME || [];
  console.log(EMPLOYEE_ME.email);

     // redirect to employee-dashboard profile page if login name is yours
     if (Auth.loggedIn() && Auth.getProfile().data.email === userParams) {
      return <Redirect to="/employer-dashboard" />;
    }
 
  return(
    <div className='container'>
      <h2 className='text-center'>{myEmployeeData.firstName} {myEmployeeData.lastName}'s Training Record</h2>
      <Grid columns='equal'>
        <Grid.Row>
          <Grid.Column className='center-objs'>
            <h2>My Record</h2>
            {/* <ul>
              {myCourses.courses.map((course) => (
                <li key={course._id}>{course.courseTitle}</li>
              )
             )}
           </ul> */}
          </Grid.Column>

        </Grid.Row>


      </Grid>
    
    
    </div>
    );
  }

    

export default EmployeeDashBoard;
