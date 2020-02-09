const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  profession: String,
  date_created: { type: Date, default: Date.now },
  role: { id: Number, name: String },
  start_date: Date,
  end_date: Date,
  contact_number: String,
  email: String,
});

module.exports = userSchema;
