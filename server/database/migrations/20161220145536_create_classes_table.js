exports.up = knex => knex.schema.createTable('classes', (table) => {
  table.increments('id').primary();
  table.integer('teacher_id').unsigned();
  table.integer('course_id').unsigned();
  table.string('name');
  table.integer('size');
  table.string('location');
  table.boolean('monday').defaultTo(false);
  table.boolean('tuesday').defaultTo(false);
  table.boolean('wednesday').defaultTo(false);
  table.boolean('thursday').defaultTo(false);
  table.boolean('friday').defaultTo(false);
  table.time('start_time');
  table.time('end_time');
  table.timestamp('start_date').defaultTo(knex.fn.now());
  table.timestamp('end_date').defaultTo(knex.fn.now());
  table.timestamps(true, true);
  table.foreign('teacher_id').references('teachers.id');
  table.foreign('course_id').references('courses.id');
});

exports.down = knex => knex.schema.dropTable('classes');
