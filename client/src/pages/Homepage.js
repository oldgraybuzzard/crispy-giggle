import React from "react";
import {Grid} from 'semantic-ui-react';
import { useQuery } from "@apollo/client";
import { COURSES } from "../utils/queries";

const Homepage = () => {
  const { loading, data } = useQuery(COURSES);
  
  if (loading) {
    return (
      <h2>Loading...</h2>
    );
  }

  const courseData = data?.courses || [];
  
  return (
    <>
      <h1 className="center-objs">Courses</h1>
      <Grid columns='equal'>
        <Grid.Row>
          <Grid.Column width={9} className="center-objs">
            <ul>
              {courseData.map((course) => (
                  <li key={course._id} className="empr-course-list">
                      <h2>{course.courseTitle}</h2>
                      <textarea value={course.courseText} />
                      <p>
                        Number of employees: {course.employees.length}
                        <br />
                        <br />
                        <br />
                        By <h4>{course.employer[0].companyName}</h4>
                      </p>
                  </li>
              ))}
            </ul>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default Homepage;