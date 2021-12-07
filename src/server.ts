/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-import-module-exports */
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line import/no-import-module-exports
import express from 'express';
import ClientRouter from './client/frameworks-drivers/routes/clientRoutes';

const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
dotenv.config();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, '../public')));

mongoose.connect(
  process.env.ATLAS_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

const { connection } = mongoose;

connection.once('open', () => {
  console.log('MongoDB database connection established succesfully');
});

app.use('/api/V1/cliente', ClientRouter);
// app.use('/api/V1/imagen', require('./routes/image'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
