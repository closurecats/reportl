require('dotenv').config({
  silent: true,
});
require('dotenv').config({
  path: '../../.env',
  silent: true,
});

const client = 'mysql';
const connection = {
  host: process.env.DB_HOST || 'database',
  user: process.env.DB_USER || 'reportl',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE || 'reportl',
};

const migrations = {
  tableName: 'knex_migrations',
};

module.exports = {
  development: {
    client,
    connection,
    migrations,
    pool: {
      max: 1,
    },
  },
  production: { client, connection, migrations },
};
