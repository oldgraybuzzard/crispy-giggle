import React from "react";
import {Grid, Button} from 'semantic-ui-react';
import { useMutation } from "@apollo/client";


const AddEmployee = (props) => {
    return (
        <>
        <form>
            <h2>AddEmployee</h2>
            <div>
                <span>Enter employee's first name:</span>
                <input placeholder="Employee's first name" />
            </div>
            <div>
                <span>Enter employee's last name:</span>
                <input placeholder="Employee's last name" />
            </div>
            <div>
                <span>Enter employee's department:</span>
                <input placeholder="Employee's department" />
            </div>
            <div>
                <span>Enter employee's role:</span>
                <input placeholder="Employee's role" />
            </div>
            <div>
                <span>Enter employee's password:</span>
                <input placeholder="Employee's password" />
            </div>
            <button type="submit">Add Employee</button>
        </form>
        </>
    );
};

export default AddEmployee;