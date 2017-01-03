exports.up = knex => knex.schema.createTable('attendance', (table) => {
  table.increments('id').primary();
  table.integer('meeting_id').unsigned();
  table.integer('student_id').unsigned();
  table.boolean('present').defaultTo(false);
  table.timestamps(true, true);
  table.foreign('meeting_id').references('meetings.id');
  table.foreign('student_id').references('students.id');
});

exports.down = knex => knex.schema.dropTable('attendance');
