const mongoose = require('mongoose');
const userSchema = require('./schema');

const UserModel = mongoose.model('User', userSchema);

const createUser = (newUser) => {
  const User = new UserModel(newUser);
  User.save()
    .then(rs => console.log(rs))
    .catch(err => console.log(err));
};

const getUser = id => {
  UserModel.find({ _id: id })
    .select({ first_name: 1, role: 1, profession: 1})
    .then(rs => console.log(rs))
};

module.exports = { createUser, getUser };
