const { Database } = require('quickmongo');
const data = require('../config');
const db = new Database(data.mongo);
db.connect().then(() => console.log('[ MONGO DB ] Connected to Mongo Database!'));

module.exports = db;