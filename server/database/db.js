const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[process.env.NODE_ENV || 'development']);
const db = require('bookshelf')(knex);
const exec = require('child_process').exec;

db.plugin('visibility');
db.plugin('virtuals');
db.plugin('bookshelf-camelcase');
db.plugin('registry');

(function migrate(i) {
  if (i > 0 && process.env.NODE_ENV === 'production') {
    knex.migrate.latest({
      directory: './server/database/migrations',
    })
    .then(() => console.log('Migration complete'))
    .then(() => knex.seed.run({
      directory: './server/database/seeds',
    }))
    .then(() => console.log('Seed Complete'))
    .then(() => new Promise((resolve, reject) => {
      exec('npm run make:user', (err, stdout, stderr) => {
        if (err) {
          console.log(`EXEC err - ${err}`);
          reject(err);
        }
        console.log(`STDOUT: ${stdout}`);
        console.log(`STDERR: ${stderr}`);
        resolve(stdout);
      });
    }))
    .then(() => console.log('Database setup complete'))
    .catch((err) => {
      console.log(`Migration error - ${err}`);
      setTimeout(() => {
        migrate(i - 1);
      }, 10 * 1000);
    });
  }
}(10));

module.exports = db;
