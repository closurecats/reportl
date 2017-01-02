const knexConfig = require('../server/database/knexfile.js');
const knex = require('knex')(knexConfig[process.env.NODE_ENV || 'development']);

const migrateConfig = {
  directory: './server/database/migrations',
};

const rollback = () => knex.migrate.rollback(migrateConfig)
  .then((data) => {
    if (data[1].length) {
      console.log(`Batch ${data[0]} run: ${data[1].length} migrations`);
      console.log(data[1].join('\n'));
    }

    return knex.migrate.currentVersion(migrateConfig);
  });

const goBack = () => rollback().then((version) => {
  console.log('Version:', version);
  if (version === 'none') {
    return process.exit();
  }
  return goBack();
})
.catch((error) => {
  console.log('Error', error);
  process.exit(1);
});

knex.raw('SET foreign_key_checks = 0;')
  .then(() => goBack())
  .finally(() => knex.raw('SET foreign_key_checks = 1;'));
