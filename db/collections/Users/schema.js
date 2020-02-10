const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  first_name: {type: String, required: true},
  last_name: String,
  profession: String,
  date_created: { type: Date, default: Date.now },
  role: { id: Number, name: String, type: Object, required: true},
  start_date: Date,
  end_date: Date,
  contact_number: {
    type: String,
    validate: {
      validator: function(v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    },
    required: [true, 'Phone number is required']
  },
  email: {type:String, required: [true, 'Email address is required']},
}, { collection: 'Users' });

module.exports = userSchema;
