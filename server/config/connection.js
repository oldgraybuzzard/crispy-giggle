const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/trainingmanagement2db', {
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/trainingmanagement3db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
});

module.exports = mongoose.connection;

