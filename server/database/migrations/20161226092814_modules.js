exports.up = knex => knex.schema.createTable('modules', (table) => {
  table.increments('id').primary();
  table.string('module_name');
  table.string('description');
  table.timestamp('start_date').defaultTo(knex.fn.now());
  table.timestamp('end_date').defaultTo(knex.fn.now());
  table.decimal('percent_of_class_grade', 4);
  table.integer('class_id').unsigned();
  table.foreign('class_id').references('classes.id');
});

exports.down = knex => knex.schema.dropTable('modules');
