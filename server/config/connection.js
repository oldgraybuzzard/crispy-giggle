const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI || 'mongodb://trainingdb', {
  //useFindAndModify: false,//
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useCreateIndex: true,//
});
module.exports=mongoose.connection