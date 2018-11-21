const mongoose = require('mongoose');
console.log('connecting to mongoDB');
mongoose.connect(
  'mongodb://nathanong12:expTracker1@ds125113.mlab.com:25113/expiration-tracker', { useNewUrlParser: true }
);

const expSchema = mongoose.Schema({
  itemName: String,
  expirationDate: Date,
  setReminder: Boolean,
  reminderDate: Date,
});

const ExpirationData = mongoose.model('ExpirationData', expSchema);

const save = (expData) => {
  ExpirationData.create(expData, (err, res) => {
    if (err) console.log(err);
    else console.log(`successfully saved to db!: \n****************************\n${res}\n********************************`);
  })
}

const fetch = () => {
  return ExpirationData.find({}).sort('expirationDate');
}

module.exports = {
  fetch: fetch,
  save: save
}