const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[process.env.NODE_ENV || 'development']);
const db = require('bookshelf')(knex);

db.plugin('visibility');
db.plugin('virtuals');
db.plugin('bookshelf-camelcase');
db.plugin('registry');

module.exports = db;
