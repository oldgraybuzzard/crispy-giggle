const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

const { User } = require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// here is the connection to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/trainingdb', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

mongoose.set('useCreateIndex', true);
mongoose.set('debug', true);

app.post('/submit', ({ body }, res) => {
  const user = new User(body);

  User.create(user)
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

// do wee need this code below? (lines 36-40) I don't think its needed since we are using GraphQL
app.get('/users', (req, res) => {
  User.find({}).then(users => {
    res.json(users);
  });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});