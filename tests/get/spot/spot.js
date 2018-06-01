const should = require('should');
const main = require('../../../get/spot/index');

describe('get/spot/spot test suite', () => {
  it('Canary test', () => {
    true.should.equal(true);
  });

  it('main test', () => {
    main.main().message.should.equal('Hello World!');
  });
});