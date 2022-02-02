const mongoose = require('mongoose');

<<<<<<< HEAD
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/trainingmanagement2db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
});
=======
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/trainingmanagement2db',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  }
);
>>>>>>> feature/forms-backend-connection

module.exports = mongoose.connection;
