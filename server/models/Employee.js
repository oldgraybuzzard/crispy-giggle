const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const employeeSchema = new Schema({
    firstName: {
        type: String, 
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    department: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        trim: true
    },
    courses: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Course'
        }
    ]
});

module.exports = employeeSchema;

// const Employee = model('Employee', employeeSchema);

// module.exports = Employee;