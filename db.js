const db = require('./db/index');
const cols = require('./db/collections/index');

db.connect();

// cols.userModel.createUser({
//   first_name: 'Seb',
//   profession: 'Software Developer',
//   role: {id: 2, name: 'Sales Manager'},
//   start_date: Date.now(),
//   contact_number: '084-663-9791',
//   email: 'djinnwheeler@gmail.com',
// });

cols.userModel.getUser('5e40fb759197813c015a629a');
