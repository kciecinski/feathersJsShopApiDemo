/* eslint-disable require-atomic-updates */
module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    // Get `app`, `method`, `params` and `result` from the hook context
    const { app, method, result, params } = context;
    // Function that adds the user to a single product object
    const addCategory = async product => {
      // Get the Category based on their id, pass the `params` along so
      // that we get a safe version of the Category data
      let category;
      if ( product.category ) {
        category = await app.service('categories').get(product.category, params);
      }
      
      // Merge the product content to include the `category` object
      return {
        ...product,
        category
      };
    };

    // In a find method we need to process the entire page
    if (method === 'find') {
      // Map all data to include the `category` information
      context.result.data = await Promise.all(result.data.map(addCategory));
    } else {
      // Otherwise just update the single result
      context.result = await addCategory(result);
    }

    return context;
  };
};

