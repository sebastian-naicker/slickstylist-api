const db = require('./db/index');
const cols = require('./db/collections/index');

db.connect();

// cols.userModel.createUser({
//   first_name: 'Sebastian',
//   last_name: 'Naicker',
//   profession: 'Software Developer',
//   role: { id: 1, name: 'Admin' },
//   start_date: Date.now(),
//   contact_number: '0846639791',
//   email: 'djinnwheeler@gmail.com',
// });

cols.userModel.getUser('5e4091d1d690d201cb100114');
