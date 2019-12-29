const products = require('./products/products.service.js');
const categories = require('./categories/categories.service.js');
const orders = require('./orders/orders.service.js');
const status = require('./status/status.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(products);
  app.configure(categories);
  app.configure(orders);
  app.configure(status);
};
