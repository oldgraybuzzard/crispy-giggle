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
      <h1 className="homepage-courses-title">
        <span>
          <span className="homepage-courses">Courses</span>
        </span>
      </h1>
      <section className="grid">
        <ul>
          {courseData.map((course) => (
              <li key={course._id} className="home-course-list course-list-width">
                  <h2><span className="h2-sizes">{course.courseTitle} By {course.employer[0].companyName}</span></h2>
                  <textarea value={course.courseText} className="course-list-text" />
                  <p>
                    Number of employees: {course.employees.length}
                  </p>
              </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Homepage;