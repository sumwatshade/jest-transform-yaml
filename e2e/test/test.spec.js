const contents = require('./spec.yaml');

describe('jest-transform-yaml', () => {
  it('can load yaml', () => {
    expect(contents.hello).toEqual('world');
  });
});
