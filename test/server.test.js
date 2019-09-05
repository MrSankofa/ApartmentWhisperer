const server = require('../controller/server.js');

test('express server exists', () => {
  expect(!!server).toBe(true);
});
