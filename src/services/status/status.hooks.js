const { disallow, populate } = require('feathers-hooks-common');

const populateOrders = require('../../hooks/populateOrders');
const orsersSchema = {
  include: {
    service: 'orders',
    nameAs: 'orders',
    parentField: '_id',
    childField: 'status'
  }
};
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [disallow('rest')],
    update: [disallow('rest')],
    patch: [disallow('rest')],
    remove: [disallow('rest')]
  },

  after: {
    all: [],
    find: [],
    get: [populate({ schema: orsersSchema })],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
