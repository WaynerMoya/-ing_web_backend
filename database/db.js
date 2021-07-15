

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/my_database_exercise', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

