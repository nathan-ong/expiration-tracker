const mongoose = require('mongoose');
console.log('connecting to mongoDB');
mongoose.connect(
  'mongodb://nathanong12:expTracker1@ds125113.mlab.com:25113/expiration-tracker', { useNewUrlParser: true }
);

const expSchema = mongoose.Schema({
  itemName: String,
  expDay: Number,
  expMonth: String,
  expYear: Number,
  setReminder: Boolean,
  reminderNum: String,
  reminderUnit: String,
});

const ExpirationData = mongoose.model('ExpirationData', expSchema);

const save = (expData) => {
  ExpirationData.create(expData, (err, res) => {
    if (err) console.log(err);
    else console.log(res);
  })
}

const fetch = () => {
  return ExpirationData.find();
}

module.exports = {
  fetch: fetch,
  save: save
}