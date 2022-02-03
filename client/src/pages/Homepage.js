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
      <h1 className="center-objs homepage-courses-title">
        <span>
          <span className="homepage-courses">Courses</span>
        </span>
      </h1>
      <Grid columns='equal'>
        <Grid.Row>
          <Grid.Column width={9} className="center-objs">
            <ul>
              {courseData.map((course) => (
                  <li key={course._id} className="home-course-list course-list-width">
                      <h2>{course.courseTitle} By {course.employer[0].companyName}</h2>
                      <textarea value={course.courseText} className="course-list-text" />
                      <p>
                        Number of employees: {course.employees.length}
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