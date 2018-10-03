import { dummy } from './dummy';

describe('dummy', () => {
  it('does something', () => {
    expect(dummy()).toEqual('dummy');
  });

  it('does something else', () => {
    expect(dummy()).not.toEqual('smart');
  });
});
