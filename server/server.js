require('dotenv').config({
  silent: true,
});

const path = require('path');
const express = require('express');
const apiRouter = require('./routers/apiRouter');
const bodyParser = require('body-parser');
const apiRouter = require('./routers/apiRouter');
const authRouter = require('./routers/authRouter');

const port = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/api', apiRouter);
app.use('/auth', authRouter);

app.all('*', (req, res) => {
  res.status(404).send('Wrong place bud');
});

app.listen(port, () => console.log(`Server listening on *:${port}`));
