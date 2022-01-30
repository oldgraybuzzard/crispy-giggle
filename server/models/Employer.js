const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema, model } = mongoose;

// bring in employerSchema and courseSchema
const employeeSchema = require('./Employee');
const courseSchema = require('./Course');

const employerSchema = new Schema({
    companyName: {
        type: String,
        required: true,
        trim: true,
        unique: true
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
    courses: [courseSchema],
    employees: [employeeSchema]
});

// set up pre-save middleware to create password
employerSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

// compare the incoming password with the hashed password
employerSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

const Employer = model('Employer', employerSchema);

module.exports = Employer;