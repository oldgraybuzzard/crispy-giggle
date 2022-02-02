const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormatter');

const courseSchema = new Schema(
<<<<<<< HEAD
    {
        courseTitle: {
            type: String,
            required: "You haven't entered any course material!",
            minlength: 1,
            // maxlength can change just leaving it here for now.
            maxlength: 50
        },
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
                ref: 'Employer',
            }
        ],
        employees: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Employee'
            }
        ]
    },
    {
        toJSON: {
            getters: true
        }
    }
=======
  {
    courseTitle: {
      type: String,
      required: "You haven't entered any course material!",
      minlength: 1,
      // maxlength can change just leaving it here for now.
      maxlength: 50,
    },
    courseText: {
      type: String,
      required: "You haven't entered any course material!",
      minlength: 1,
      // maxlength can change just leaving it here for now.
      maxlength: 2000,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp),
    },
    employer: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Employer',
      },
    ],
    employees: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Employee',
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
>>>>>>> feature/forms-backend-connection
);

const Course = model('Course', courseSchema);

<<<<<<< HEAD
module.exports = Course;
=======
module.exports = Course;
>>>>>>> feature/forms-backend-connection
