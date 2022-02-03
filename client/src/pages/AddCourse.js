import React, { useState } from "react";
import {Grid, Button} from 'semantic-ui-react';
import { useMutation } from "@apollo/client";
import { ADD_COURSE } from '../utils/mutations';

const AddCourse = (props) => {
    const [formState, setFormState] = useState({
        courseTitle: '',
        courseText: '',
        employees: ''
    });

    const [addCourse, { error }] = useMutation(ADD_COURSE);

    // capture data from the input elements.
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // handleFormSubmit to use captured data in formState to create an employee
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addCourse({
                variables: { ...formState },
            });
        } catch (e) {
            console.error(e);
        }

        // clear the form values
        setFormState({
            courseTitle: '',
            courseText: '',
            employees: ''
        });
    };

    return (
        <>
        <form onSubmit={handleFormSubmit}>
            <h2>Create a Course</h2>
            <div>
                <span>Enter a Course Title: </span>
                <input
                    placeholder="Title" 
                    name="courseTitle"
                    type="courseTitle"
                    id="courseTitle"
                    value={formState.courseTitle}
                    onChange={handleChange}
                />
            </div>
            <div>
                <span>Enter Course Text: </span>
                <textarea 
                    placeholder="Enter Course Text Here" 
                    name="courseText"
                    type="courseText"
                    id="courseText"
                    value={formState.courseText}
                    onChange={handleChange}
                />
            </div>
            <div>
                <span>Enter Employee's ID (The employees' IDs can be found on your dashboard):</span>
                <input 
                    placeholder="Employee's ID" 
                    name="employees"
                    type="employees"
                    id="employees"
                    value={formState.employees}
                    onChange={handleChange}
                />
            </div>
            <Button type="submit">Add Course</Button>
        </form>
        </>
    );
};

export default AddCourse;