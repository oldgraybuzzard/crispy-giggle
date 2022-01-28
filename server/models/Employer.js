const { Schema, model } = mongoose;

const employerSchema = new Schema({
    companyName: {
        type: String,
        required: true,
        trim: true,
    },
    department: {}
})

module.exports = Department;