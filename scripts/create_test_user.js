const User = require('../server/models/userModel');

User.forge({
  name: 'test',
})
.fetch()
.then((user) => {
  if (user) {
    console.log('Deleting test user');
    return user.destroy();
  }
  console.log('No test user');
  return false;
})
.then(() => User.forge({
  name: 'test',
  fullName: 'Tester McTesting',
  email: 'test@testing.com',
  password: 'test',
  typeId: 1,
  profilePhotoId: 13,
}).save())
.then(() => {
  console.log('Created test user');
  return User.fetchAll();
})
.then((users) => {
  users.forEach(user => user.set('password', 'test'));

  return Promise.all(users.map(user => user.hashPassword()));
})
.then(users => Promise.all(users.map(user => user.save())))
.then(() => {
  console.log('Done setting passwords for all users');
  process.exit();
});
