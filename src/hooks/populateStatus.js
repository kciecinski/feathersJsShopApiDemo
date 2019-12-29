/* eslint-disable require-atomic-updates */
module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    // Get `app`, `method`, `params` and `result` from the hook context
    const { app, method, result, params } = context;
    // Function that adds the user to a single order object
    const addStatus = async order => {
      // Get the Category based on their id, pass the `params` along so
      // that we get a safe version of the Category data
      let status;
      if ( order.status ) {
        status = await app.service('status').get(order.status, params);
      }
      // Merge the order content to include the `status` object
      return {
        ...order,
        status
      };
    };

    // In a find method we need to process the entire page
    if (method === 'find') {
      // Map all data to include the `status` information
      context.result.data = await Promise.all(result.data.map(addStatus));
    } else {
      // Otherwise just update the single result
      context.result = await addStatus(result);
    }

    return context;
  };
};

