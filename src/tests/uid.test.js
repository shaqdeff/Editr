import uid from './__mocks__/uid';

describe('uid', () => {
  it('should return a string', () => {
    expect(typeof uid()).toBe('string');
  });
});
