// Initializes the `status` service on path `/status`
const { Status } = require('./status.class');
const createModel = require('../../models/status.model');
const hooks = require('./status.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/status', new Status(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('status');

  service.hooks(hooks);
};
