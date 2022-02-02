import React from "react";
import {Container, Row, Col, Button} from 'react-bootstrap'
import { useMutation, useQuery } from "@apollo/client";

const EmployerDashboard = () => {

    const employees = [
        'Employee1',
        'Employee2',
        'Employee3',
        'Employee4',
        'Employee5'
    ];

    const courses = [
        {
            course: 'CourseTitle1',
            employeeCount: '25'
        },
        {
            course: 'CourseTitle2',
            employeeCount: '32'
        },
        {
            course: 'CourseTitle3',
            employeeCount: '12'
        },
        {
            course: 'CourseTitle4',
            employeeCount: '19'
        },
    ]

    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={2} s={2} md={2} lg={2}>
                        <h2>Employees!</h2>
                        <ul>
                            {employees.map((employee) => (
                                <li key={employee}>{employee}</li>
                            )
                            )}
                        </ul>
                    </Col>
                    <Col xs={7} s={7} md={7} lg={7} className="center-objs">
                        <h2>Courses!</h2>
                        <ul>
                            {courses.map((course) => (
                                <li key={course} className="empr-course-list">
                                    <h2>{course.course}</h2>
                                    <p>Number of employees: {course.employeeCount}</p>
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col className="center-objs">
                        <Button className="empr-btns">Create a Course</Button>
                        <Button className="empr-btns">Add Employee</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default EmployerDashboard;