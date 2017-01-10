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
  password: 'test',
  typeId: 1,
}).save())
.then(() => {
  console.log('Created test user');
  process.exit();
});
