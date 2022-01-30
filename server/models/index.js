const mongoose = require('mongoose');
const Employer = require('./Employer');
const employeeSchema = require('./Employee');

// turn employeeSchema into a model here and export it
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = { Employer, Employee };