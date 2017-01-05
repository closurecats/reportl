exports.up = knex => knex.schema.createTable('gradeable_objects', (table) => {
  table.increments('id').primary();
  table.string('object_name').unique();
  table.integer('duration');
  table.decimal('percent_of_module_grade', 4);
  table.integer('module_id').unsigned();
  table.integer('meeting_id').unsigned();
  table.integer('file_id').unsigned();
  table.foreign('file_id').references('files.id');
  table.foreign('module_id').references('modules.id');
  table.foreign('meeting_id').references('meetings.id');
});

exports.down = knex => knex.schema.dropTable('gradeable_objects');
