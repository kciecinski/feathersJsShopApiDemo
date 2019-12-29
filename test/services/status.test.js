const app = require('../../src/app');

describe('\'status\' service', () => {
  it('registered the service', () => {
    const service = app.service('status');
    expect(service).toBeTruthy();
  });
});
