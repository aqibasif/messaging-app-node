const express = require('express');
const customers = require('../routes/customers');
const products = require('../routes/products');
const users = require('../routes/users');
const auth = require('../routes/auth');
const error = require('../middleware/error');
const fileupload = require('../routes/fileupload');
const orders = require('../routes/orders');
const locations = require('../routes/locations');
const videos = require('../routes/videos');
const financials = require('../routes/financials');

module.exports = function (app) {
  app.use(express.json());
  app.use('/api/customers', customers);
  app.use('/api/products', products);
  app.use('/api/users', users);
  app.use('/api/locations', locations);
  app.use('/api/videos', videos);
  app.use('/api/financials', financials);
  app.use('/api/auth', auth);
  app.use('/api/orders', orders);
  app.use('/api/fileupload', fileupload);
  app.use(error);
};
