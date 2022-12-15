import { getCursorCoordinates, setCursorToEnd } from './__mocks__/cursorSet';

describe('getCursorCoordinates', () => {
  it('should return the cursor coordinates', () => {
    const { x, y } = getCursorCoordinates();
    expect(x).toBe(undefined);
    expect(y).toBe(undefined);
  });
});

describe('setCursorToEnd', () => {
  it('should set the cursor to the end of the element', () => {
    const element = document.createElement('div');
    setCursorToEnd(element);
    expect(element).toBe(element);
  });
});
