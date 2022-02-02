const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema, model } = mongoose;

const employeeSchema = new Schema(
<<<<<<< HEAD
    {
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
        password: {
            type: String,
            required: true,
            minlength: 6
        },
        department: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            trim: true
        },
        employerId: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Employer',
            }
        ],
        courses: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Course'
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
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    department: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      trim: true,
    },
    employerId: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Employer',
      },
    ],
    courses: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Course',
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

// set up pre-save middleware to create password
employeeSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
employeeSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Employee = model('Employee', employeeSchema);

module.exports = Employee;
