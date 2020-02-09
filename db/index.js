const mongoose = require('mongoose');
const db_debug = require('debug')('db');
const config = require('config');

const connect = () => {
  mongoose.connect(config.db_url)
    .then(() => { db_debug('connected to DB') })
    .catch(err => db_debug(err));
};

module.exports = { connect };
