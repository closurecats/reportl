exports.seed = (knex, Promise) => {
  const tableName = 'students_classes';
  const data = [{ student_id: 1, class_id: 1 },
  { student_id: 2, class_id: 1 },
  { student_id: 3, class_id: 1 },
  { student_id: 4, class_id: 1 },
  { student_id: 5, class_id: 1 },
  { student_id: 6, class_id: 1 },
  { student_id: 7, class_id: 1 },
  { student_id: 1, class_id: 2 },
  { student_id: 2, class_id: 2 },
  { student_id: 3, class_id: 2 },
  { student_id: 4, class_id: 2 },
  { student_id: 5, class_id: 2 },
  { student_id: 6, class_id: 2 },
  { student_id: 7, class_id: 2 },
  { student_id: 1, class_id: 3 },
  { student_id: 2, class_id: 3 },
  { student_id: 3, class_id: 3 },
  { student_id: 4, class_id: 3 },
  { student_id: 5, class_id: 3 },
  { student_id: 6, class_id: 3 },
  { student_id: 7, class_id: 3 },
  { student_id: 1, class_id: 4 },
  { student_id: 2, class_id: 4 },
  { student_id: 3, class_id: 4 },
  { student_id: 4, class_id: 4 },
  { student_id: 5, class_id: 4 },
  { student_id: 6, class_id: 4 },
  { student_id: 7, class_id: 4 },
  { student_id: 1, class_id: 5 },
  { student_id: 2, class_id: 5 },
  { student_id: 3, class_id: 5 },
  { student_id: 4, class_id: 5 },
  { student_id: 5, class_id: 5 },
  { student_id: 6, class_id: 5 },
  { student_id: 7, class_id: 5 }];

  return knex.raw('SET foreign_key_checks = 0;')
    .then(() => knex(tableName).del())
    .then(() => Promise.all(data.map(type => knex(tableName).insert(type))))
    .finally(() => knex.raw('SET foreign_key_checks = 1;'));
};
