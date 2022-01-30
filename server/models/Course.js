const { Schema, model } = require('mongoose');
const dateFormat = require ('../utils/dateFormatter');

const courseSchema = new Schema({
    courseText: {
        type: String,
        required: "You haven't entered any course material!",
        minlength: 1,
        // maxlength can change just leaving it here for now.
        maxlength: 2000
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    },
    employer: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Employer'
        }
    ],
    employees: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Employee'
        }
    ]
});


module.exports = courseSchema;