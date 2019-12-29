/* eslint-disable require-atomic-updates */
var mongoose = require('mongoose');
module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    // Get `app`, `method`, `params` and `result` from the hook context
    const { app, method, result, params } = context;
    // Function that adds the user to a single product object
    
    const getStatusId = async() => app.service('status').find({ query: {name: "Not Approved"} });
    let statusId = await getStatusId();
    console.log(statusId.data[0]._id);
    context.data.status = mongoose.mongo.ObjectId(statusId.data[0]._id);
    
    return context;
  };
};

