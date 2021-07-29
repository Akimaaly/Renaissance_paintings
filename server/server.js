require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { PORT } = process.env;
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log('Server started on port', PORT);
});
