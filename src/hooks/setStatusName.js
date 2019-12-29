/* eslint-disable require-atomic-updates */
var mongoose = require('mongoose');
module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    // Get `app`, `method`, `params` and `result` from the hook context
    const { app, method, result, params } = context;
    // Function that adds the user to a single product object
    const getStatus = async() => app.service('status').get(context.data.status);
    let status = await getStatus();
    context.data.statusName = status.name;
    
    return context;
  };
};