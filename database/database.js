const mongoose = require('mongoose');
const { database } = require('./key');

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb+srv://rpopi:holamundo2020@cluster0.uemjr.azure.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true 
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.log(err));
