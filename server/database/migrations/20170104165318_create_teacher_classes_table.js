
exports.up = knex => knex.schema.createTable('teachers_classes', (table) => {
  table.integer('class_id').unsigned();
  table.integer('teacher_id').unsigned();
  table.timestamps(true, true);
  table.primary(['class_id', 'teacher_id']);
  table.foreign('class_id').references('classes.id');
  table.foreign('teacher_id').references('users.id');
});

exports.down = knex => knex.schema.dropTable('teachers_classes');
