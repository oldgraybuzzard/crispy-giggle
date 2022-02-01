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
    employer: {
        type: String,
        required: true
    },
    employees: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Employee'
        }
    ]
});


const Course = model('Course', courseSchema);

module.exports = Course;