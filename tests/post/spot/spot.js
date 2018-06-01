const should = require('should');
const main = require('../../../post/spot/index');

describe('post/spot/spot test suite', () => {
  it('Canary test', () => {
    true.should.equal(true);
  });

  it('main test', () => {
    main.main().message.should.equal('Hello World!');
  });
});