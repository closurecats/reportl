exports.seed = (knex, Promise) => {
  const tableName = 'classes';
  const data = [
    {
      id: 1,
      teacher_id: '8',
      course_id: '1',
      name: 'American Literature',
      size: '20',
    },
    {
      id: 2,
      teacher_id: '9',
      course_id: '2',
      name: 'Pre-Algebra',
      size: '30',
    },
    {
      id: 3,
      teacher_id: '10',
      course_id: '3',
      name: 'Biology 1',
      size: '15',
    },
    {
      id: 4,
      teacher_id: '11',
      course_id: '3',
      name: 'Biology 2',
      size: '15',
    },
    {
      id: 5,
      teacher_id: '12',
      course_id: '4',
      name: 'Spanish',
      size: '20',
    },
  ];

  return knex.raw('SET foreign_key_checks = 0;')
    .then(() => knex(tableName).del())
    .then(() => Promise.all(data.map(type => knex(tableName).insert(type))))
    .finally(() => knex.raw('SET foreign_key_checks = 1;'));
};
