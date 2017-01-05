const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[process.env.NODE_ENV || 'development']);
const db = require('bookshelf')(knex);

db.plugin('visibility');
db.plugin('virtuals');
db.plugin('bookshelf-camelcase');
db.plugin('registry');

(function migrate(i) {
  if (i > 0 && process.env.NODE_ENV === 'production') {
    knex.migrate.latest({
      directory: './server/database/migrations',
    })
    .then(() => {
      console.log('Migration complete');
    })
    .catch((err) => {
      console.log(`Migration error - ${err}`);
      setTimeout(() => {
        migrate(i - 1);
      }, 3 * 1000);
    });
  }
}(100));

module.exports = db;
