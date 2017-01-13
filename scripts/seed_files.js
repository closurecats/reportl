const knexConfig = require('../server/database/knexfile.js');
const knex = require('knex')(knexConfig[process.env.NODE_ENV || 'development']);
const fs = require('fs');
const path = require('path');
const execSync = require('child_process').execSync;

const filePath = path.join(__dirname, '../files');
const storagePath = path.join(__dirname, '../storage');

if (fs.existsSync(storagePath)) {
  execSync(`rm -r ${storagePath}`);
}

fs.mkdirSync(storagePath);

let files = fs.readdirSync(filePath);
files = files.filter(file => !(/(^|\/)\.[^/.]/g).test(file));

const promiseArr = [];

knex('files').del()
.then(() => {
  files.forEach((fileName) => {
    const id = fileName.match(/(fileId)([0-9]*)/)[2];
    const inPath = path.join(filePath, './', fileName);
    const outPath = path.join(storagePath, './', id.toString());

    promiseArr.push(knex('files').insert({
      id,
      name: fileName,
    }));
    promiseArr.push(new Promise((resolve, reject) => {
      const readStream = fs.createReadStream(inPath);
      const writeStream = fs.createWriteStream(outPath);

      const cleanup = (err) => {
        readStream.destroy();
        writeStream.end();
        reject(err);
      };
      readStream.on('error', cleanup);
      writeStream.on('error', cleanup);

      writeStream.on('finish', resolve);

      readStream.pipe(writeStream);
    }));
    console.log(fileName, id);
  });

  return Promise.all(promiseArr)
  .then(() => {
    console.log('Done seeding files');
    process.exit();
  })
  .catch((err) => {
    console.log(`Error seeding files - ${err}`);
    process.exit(1);
  });
});
