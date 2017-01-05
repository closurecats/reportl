const Meeting = require('../models/meetingModel');

const meetingsController = {
  getAll(req, res) {
    Meeting.fetchAll({
      withRelated: ['class'],
    })
      .then(meetings => res.json(meetings))
      .catch((err) => {
        console.log(`meetingsController.getAll - Error: ${err}`);
        res.sendStatus(500);
      });
  },

  getMeetingById({ params: { id }, baseUrl, originalUrl }, res) {
    Meeting.forge({ id })
      .fetch({
        withRelated: ['class', 'gradeable_objects'],
      })
      .then((meeting) => {
        if (meeting) {
          res.json(meeting);
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
        console.log(`meetingsController.getMeetingById - Error: ${err}`);
        res.sendStatus(500);
      });
  },
  deleteMeeting({ params: { id } }, res) {
    Meeting.forge({ id })
      .destroy()
      .then(() => res.status(200).json({
        status: 'success',
      }))
      .catch((err) => {
        console.log(`meetingsController.deleteMeeting - Error: ${err}`);
        res.sendStatus(500);
      });
  },
};

module.exports = meetingsController;
