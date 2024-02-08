import { slicePartsForRemaining } from '../../src/utils/slicePartsForRemaining';

describe('slicePartsForRemaining', () => {
  test('slices parts for remaining items - 2', () => {
    const parts = 'abcdef'.split('');
    const slice = slicePartsForRemaining(parts, 2);

    expect(slice).toEqual(['a', 'b', 'c', 'd', '', '']);
  });

  test('slices parts for remaining items - all', () => {
    const parts = 'abcdef'.split('');
    const slice = slicePartsForRemaining(parts, parts.length);

    expect(slice).toEqual(['', '', '', '', '', '']);
  });
  
  test('slices parts for remaining items - none', () => {
    const parts = 'abcdef'.split('');
    const slice = slicePartsForRemaining(parts, 0);

    expect(slice).toEqual(parts);
  });
  
});
