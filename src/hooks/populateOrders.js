/* eslint-disable require-atomic-updates */
var mongoose = require('mongoose');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    // Get `app`, `method`, `params` and `result` from the hook context
    const { app, method, result, params } = context;
    // Function that adds the user to a single order object
    const addOrders = async status => {
      // Get the Category based on their id, pass the `params` along so
      // that we get a safe version of the Category data
      // console.log(mongoose.mongo.ObjectId(status._id));
      const orders = await app.service('orders').find({ query: { status:  status.id } }, params);
      //  console.log( await app.service('orders').find({ query: { status:  mongoose.mongo.ObjectId('5e08bb8b1c9d440000c4dc09') } }));
      // Merge the status content to include the `status` object
      return {
        ...status,
        orders: orders.data
      };
    };

    // In a find method we need to process the entire page
    if (method === 'find') {
      // Map all data to include the `status` information
      context.result.data = await Promise.all(result.data.map(addOrders));
    } else {
      // Otherwise just update the single result
      context.result = await addOrders(result);
    }

    return context;
  };
};

