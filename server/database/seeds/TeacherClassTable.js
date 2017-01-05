
exports.seed = (knex, Promise) => {
  const tableName = 'teachers_classes';
  const data = [{ teacher_id: 8, class_id: 1 },
  { teacher_id: 9, class_id: 2 },
  { teacher_id: 10, class_id: 3 },
  { teacher_id: 11, class_id: 4 },
  { teacher_id: 12, class_id: 5 }];

  return knex.raw('SET foreign_key_checks = 0;')
    .then(() => knex(tableName).del())
    .then(() => Promise.all(data.map(type => knex(tableName).insert(type))))
    .finally(() => knex.raw('SET foreign_key_checks = 1;'));
};
