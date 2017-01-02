const File = require('../models/fileModel');
const fs = require('fs');
const path = require('path');
const formidable = require('formidable');

const storagePath = path.join(__dirname, '../../storage');

if (!fs.existsSync(storagePath)) {
  fs.mkdir(storagePath, (err) => {
    if (err) {
      console.log(`fileController.init - Error: ${err}`);
    }
  });
}

const fileController = {
  getAll(req, res) {
    File.fetchAll()
      .then(files => res.json(files))
      .catch((err) => {
        console.log(`fileController.getAll - Error: ${err}`);
        res.sendStatus(500);
      });
  },

  getFileById({ params: { id }, baseUrl, originalUrl }, res) {
    File.forge({ id })
      .fetch()
      .then((file) => {
        if (file) {
          const stream = fs.createReadStream(path.join(storagePath, `./${file.id}`));

          res.setHeader('Content-Disposition', `inline; filename=${file.get('name')}`);
          res.type(file.get('name'));
          stream.pipe(res);
        } else {
          res.status(404).json({
            error: {
              message: 'Not Found',
            },
            request: {
              endpoint: baseUrl,
              url: originalUrl,
              parameters: {
                id,
              },
            },
          });
        }
      })
      .catch((err) => {
        console.log(`fileController.getFileById - Error: ${err}`);
        res.sendStatus(500);
      });
  },

  /**
   * Update a file by it's id
   *  - use formidable to parse request
   *  - check DB for file by id
   *    - if no file send 404
   *  - move current file to tempPath
   *  - move inputFile to filePath
   *  - change file.name in DB
   *  - get updated DB entry
   *  - send updated DB entry
   *  - delete temp file
   * @param  object req http request
   * @param  object res http response
   */
  updateFileById(req, res) {
    const id = req.params.id;
    const tempNum = Math.floor(Math.random() * 1000);
    const filePath = path.join(storagePath, './', id);
    const tempPath = path.join(storagePath, './', `${id}-${tempNum}`);
    const form = new formidable.IncomingForm();

    form.parse(req, (error, fields, files) => {
      const inputFile = files[Object.keys(files).pop()];

      File.forge({ id })
        .fetch()
        .then((file) => {
          if (file) {
            return new Promise((resolve, reject) => {
              fs.rename(filePath, tempPath, (err) => {
                if (err) {
                  console.log(`fileController.updateFileById.moveToTemp - Error: ${err}`);
                  reject(err);
                }
                resolve(file);
              });
            });
          }

          return Promise.reject('No file by that id');
        })
        .then(file => new Promise((resolve, reject) => {
          fs.rename(inputFile.path, filePath, (err) => {
            if (err) {
              console.log(`fileController.updateFileById.saveFile - Error: ${err}`);
              reject(err);
            }
            resolve(file);
          });
        }))
        .then((file) => {
          file.set('name', inputFile.name);
          return file.save();
        })
        .then(() => File.forge({ id }).fetch())
        .then(file => res.json(file))
        .then(() => new Promise((resolve, reject) => {
          fs.unlink(tempPath, (err) => {
            if (err) {
              console.log(`fileController.updateFileById.deleteTempFile - Error: ${err}`);
              reject(err);
            }
            resolve();
          });
        }))
        .catch((err) => {
          console.log(`fileController.updateFileById - Error: ${err}`);
          res.json(400);

          if (err !== 'No file by that id') {
            fs.rename(tempPath, filePath, (er) => {
              if (er) {
                console.log(`fileController.updateFileById.revertTemp - Error: ${er}`);
              }
            });
          }
        });
    });
  },

  deleteFileById({ params: { id }, baseUrl, originalUrl }, res) {
    File.forge({ id })
      .fetch()
      .then((file) => {
        fs.unlinkSync(path.join(storagePath, './', id));
        return file.destroy();
      })
      .then(() => res.status(200).json({
        status: 'success',
      }))
      .catch((err) => {
        console.log(`fileController.deleteFileById - Error: ${err}`);
        res.status(404).json({
          error: {
            message: 'Cannot delete file',
          },
          request: {
            endpoint: baseUrl,
            url: originalUrl,
            parameters: {
              id,
            },
          },
        });
      });
  },

  /**
   * Save any files given in the request
   *  - use formidable to parse request
   *  - iterates over each file
   *    - makes a new db entry for each
   *    - moves the file from the temp storage to the storagePath
   *    - set's the key value as the form input keys
   *  - once all promise's are done sends a array of objects back, where each
   *    object is a file db entry
   * @param  object req http request
   * @param  object res http response
   */
  newFile(req, res) {
    const form = new formidable.IncomingForm();

    form.parse(req, (error, fields, files) => {
      Promise.all(Object.keys(files).map((fileKey) => {
        const inputFile = files[fileKey];

        return File.forge({ name: inputFile.name })
          .save()
          .then((file) => {
            fs.rename(inputFile.path, path.join(storagePath, `./${file.id}`), (err) => {
              if (err) {
                console.log(`fileController.newFile.moveFile - Error: ${err}`);
              }
            });
            file.set('key', fileKey);
            return file;
          });
      }))
      .then(result => res.json(result))
      .catch((err) => {
        console.log(`fileController.newFile - Error: ${err}`);
      });
    });
  },

};

module.exports = fileController;
