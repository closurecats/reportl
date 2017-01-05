exports.seed = (knex, Promise) => {
  const tableName = 'users';
  const data = [
    {
      id: 1,
      name: 'student6',
      first_name: 'John',
      last_name: 'Smith',
      email: 'john@gmail.com',
      type_id: 1,
    },
    {
      id: 2,
      name: 'student7',
      first_name: 'Alice',
      last_name: 'Adams',
      email: 'alice@adams.com',
      type_id: 1,
    },
    {
      id: 3,
      name: 'student1',
      first_name: 'Alvin',
      last_name: 'Ardsley',
      email: 'alvin@gmail.com',
      type_id: 1,
    },
    {
      id: 4,
      name: 'student2',
      first_name: 'Jennifer',
      last_name: 'Vasquez',
      email: 'jen@gmail.com',
      type_id: 1,
    },
    {
      id: 5,
      name: 'student3',
      first_name: 'Erin',
      last_name: 'McClellan',
      email: 'erin@gmail.com',
      type_id: 1,
    },
    {
      id: 6,
      name: 'student4',
      first_name: 'Lindsay',
      last_name: 'Herzog',
      email: 'lindsay@gmail.com',
      type_id: 1,
    },
    {
      id: 7,
      name: 'student5',
      first_name: 'Samuel',
      last_name: 'Growan',
      email: 'samuel@gmail.com',
      type_id: 1,
    },
    {
      id: 8,
      name: 'teacher1',
      first_name: 'Bob',
      last_name: 'Brown',
      email: 'bob@gmail.com',
      type_id: 2,
    },
    {
      id: 9,
      name: 'teacher2',
      first_name: 'Jack',
      last_name: 'Smith',
      email: 'jack@gmail.com',
      type_id: 2,
    },
    {
      id: 10,
      name: 'teacher3',
      first_name: 'Jill',
      last_name: 'Jones',
      email: 'jill@gmail.com',
      type_id: 2,
    },
    {
      id: 11,
      name: 'teacher4',
      first_name: 'Robert',
      last_name: 'Williams',
      email: 'robert@gmail.com',
      type_id: 2,
    },
    {
      id: 12,
      name: 'teacher5',
      first_name: 'Kush',
      last_name: 'Singh',
      email: 'kush@gmail.com',
      type_id: 2,
    },
  ];

  return knex.raw('SET foreign_key_checks = 0;')
    .then(() => knex(tableName).del())
    .then(() => Promise.all(data.map(type => knex(tableName).insert(type))))
    .finally(() => knex.raw('SET foreign_key_checks = 1;'));
};
