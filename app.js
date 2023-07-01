const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const { connect } = require('./db/initdb');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ Allan: 'Maina' });
});

connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
