const setNotApprovedStatus = require('../../hooks/setNotApprovedStatus');
const setStatusName = require('../../hooks/setStatusName')
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [setNotApprovedStatus(),setStatusName()],
    update: [setStatusName()],
    patch: [setStatusName()],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
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
