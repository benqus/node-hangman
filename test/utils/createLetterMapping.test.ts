import { createLetterMapping } from '../../src/utils/createLetterMapping';

describe('createLetterMapping', () => {
  test('creates letter mapping', () => {
    const mapping = createLetterMapping('randomword');

    expect(mapping).toEqual({
      a: false,
      d: false,
      m: false,
      n: false,
      o: false,
      r: false,
      w: false,
    });
  });
});
