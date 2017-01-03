exports.up = knex => knex.schema.createTable('meetings', (table) => {
  table.increments('id').primary();
  table.integer('class_id').unsigned();
  table.time('start_time');
  table.time('end_time');
  table.timestamps(true, true);
  table.foreign('class_id').references('classes.id');
});

exports.down = knex => knex.schema.dropTable('meetings');
